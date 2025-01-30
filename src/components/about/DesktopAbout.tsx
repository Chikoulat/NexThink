import React from 'react';
import Image from "next/image";

interface DesktopAboutProps {
    cards?: {
        id: number;
        title: string;
        description: string;
        image: string;
    }[]
}

export default function DesktopAbout({cards}: DesktopAboutProps) {
    return (
        <section className="hiddenDesktop space-y-6">
            <article className="flex justify-center gap-6 px-4">
                {cards?.map((card) => (
                    <div
                        key={card.id}
                        className="myDIV rounded h-fit bg-white w-2/3 duration-1000 hover:w-full hover:transition-all hover:duration-1000"
                    >
                        <Image src={card.image} alt={card.title} width={700} height={700}/>
                        <div className="px-6 py-4">
                            <h1 className="font-bold text-xl mb-2">{card.title}</h1>
                            <p className="text-gray-700 text-justify w-fit hide">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </article>
            <div
                className="bg-bgAbout bg-contain xl:bg-cover bg-no-repeat h-full flex justify-end"
                id="nexthink"
            >
                <p className="pr-10 text-white text-base/7 py-40 w-1/3">
                    <b>Nexthink</b> vous propose des solutions informatiques spécialisée
                    dans la gestion de l&#39;expérience numérique des employés. <br/>
                    En fournissant des analyses en temps réel, de l&#39;automatisation et
                    des retours d&#39;expérience des employés, <b>Nexthink</b> permet aux
                    équipes informatiques de gérer et d&#39;améliorer de manière proactive
                    le lieu de travail numérique. <br/> Leur plateforme innovante aide
                    les organisations à améliorer la productivité, à réduire les coûts
                    informatiques et à garantir une expérience utilisateur fluide. <br/>{' '}
                    Avec un accent sur la satisfaction des utilisateurs finaux,{' '}
                    <b>Nexthink</b> permet aux entreprises d&#39;obtenir des informations
                    approfondies sur leur infrastructure informatique, d&#39;identifier et
                    de résoudre rapidement les problèmes, et de favoriser
                    l&#39;amélioration continue de leurs services informatiques.
                </p>
            </div>
        </section>
    );
}
