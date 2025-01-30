'use client'

import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import DOMPurify from 'dompurify';
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string;
  entreprise: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function FormContact() {
  const [isLoading, setIsLoading] = useState(false);
  const classDiv = 'xl:w-60 w-40 flex flex-col gap-2';
  const classInput = 'rounded h-10 px-2 outline-none';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (errors.name) toast.info('Veuillez saisir votre nom complet');
    if (errors.entreprise)
      toast.info('Veuillez saisir le nom de votre entreprise');
    if (errors.email) {
      if (errors.email.type === 'pattern') {
        toast.info('Veuillez entrer une adresse email valide');
      } else {
        toast.info('Veuillez saisir votre adresse email');
      }
    }
    if (errors.phone) {
      if (errors.phone.type === 'pattern') {
        toast.info('Veuillez entrer un numéro valide');
      } else if (errors.phone.type === 'minLength') {
        toast.info('Le numéro doit contenir au moins 10 chiffres');
      } else {
        toast.info('Veuillez saisir votre numéro de téléphone');
      }
    }
    if (errors.subject) toast.info('Veuillez saisir le sujet de votre message');
    if (errors.message) toast.info('Veuillez saisir votre message');
  }, [errors]);

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    setIsLoading(true);
    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      entreprise: DOMPurify.sanitize(data.entreprise),
      email: DOMPurify.sanitize(data.email),
      phone: DOMPurify.sanitize(data.phone),
      subject: DOMPurify.sanitize(data.subject),
      message: DOMPurify.sanitize(data.message),
    };
    const serviceID = process.env.NEXT_PUBLIC_API_SERVICE_ID  as string;
    const templateID = process.env.NEXT_PUBLIC_API_TEMPLATE_ID  as string;
    const userID = process.env.NEXT_PUBLIC_API_PUBLIC_KEY  as string;

    emailjs.send(serviceID, templateID, sanitizedData, userID).then(
      () => {
        toast.success('Votre message a été envoyé avec succès');
        setIsLoading(false);
      },
      () => {
        toast.error("Une erreur est survenue lors de l'envoi de votre message");
        setIsLoading(false);
      }
    );
  };

  return (
    <form
      id="contact-form"
      className=" flex flex-col gap-5 justify-center text-xs xl:text-base"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <div className={classDiv}>
          <label htmlFor="name">
            Nom complet:
          </label>
          <input
            type="text"
            placeholder="Nom complet"
            className={classInput}
            {...register('name', { required: true, maxLength: 80 })}
          />
        </div>
        <div className={classDiv}>
          <label htmlFor="entreprise">
            Entreprise:
          </label>
          <input
            type="text"
            placeholder="Entreprise"
            className={classInput}
            {...register('entreprise', { required: true, maxLength: 80 })}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className={classDiv}>
          <label htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            className={classInput}
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
              maxLength: 80,
            })}
          />
        </div>
        <div className={classDiv}>
          <label htmlFor="phone">
            Numéro de téléphone:
          </label>
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className={classInput}
            {...register('phone', {
              required: true,
              pattern: /^[0-9]+$/,
              minLength: 10,
            })}
          />
        </div>
      </div>
      <div className={`${classDiv} w-full xl:w-full`}>
        <label htmlFor="subject">
          Sujet:
        </label>
        <input
          type="text"
          placeholder="Sujet"
          className={classInput}
          {...register('subject', { required: true, maxLength: 80 })}
        />
      </div>
      <div className={`${classDiv} w-[21rem] xl:w-[31rem]`}>
        <label htmlFor="message">
          Message:
        </label>
        <textarea
          placeholder="Message"
          className={`${classInput} h-60 p-4`}
          {...register('message', { required: true })}
        />
      </div>
      <button
        type="submit"
        className="w-40 bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition duration-300"
      >
         {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-secondary mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          'Envoyer'
        )}
      </button>
    </form>
  );
}

export default FormContact;
