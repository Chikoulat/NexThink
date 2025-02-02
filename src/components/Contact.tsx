import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from '../../public/images/contact.png';
import FormContact from './contact/FormContact';
import Image from "next/image";

function Contact() {
    return (
        <section id="contact">
            <h1 className="text-secondary text-center text-4xl font-semibold py-4 uppercase xl:text-6xl">Contactez nous</h1>
            <div className="flex flex-col contactMobile justify-between gap-6 px-8 xl:flex-row xl:justify-evenly xl:gap-0 py-10 rounded">
                   <Image src={contact} alt="contact image" className="xl:w-1/3 xl:rounded-2xl"/>

            <FormContact/>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
}

export default Contact;
