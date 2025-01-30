import React from 'react';
import aboutImg from '../../../public/background/bg-about.png';
import Image from "next/image";

interface MobileAboutProps {
    cards?: {
        id: number;
        title: string;
        description: string;
        image: string;
    }[]
}

export default function MobileAbout({cards}: MobileAboutProps) {
    return (
        <section className="xl:hidden space-y-6">
            <article className="flex gap-10 px-5 overflow-x-auto whitespace-nowrap text-center">
                {cards?.map((card) => (
                    <div key={card.id} className="rounded bg-white w-96">
                        <Image src={card.image} alt={card.title} className="rounded-t-sm" width={500} height={500}/>
                        <div className="px-6 py-4 text-wrap w-96">
                            <h1 className="font-semibold text-center mb-2">{card.title}</h1>
                            <p className="text-gray-700 text-sm text-justify">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </article>
            <div>
                <Image
                    src={aboutImg}
                    alt="about"
                    className="bg-bgAbout bg-top relative h-screen"
                />
                <p className="text-justify absolute left-0 right-0 w-[40ch] top-[75rem] px-9 bg-gray-100 bg-opacity-65 mx-auto">
                    <b>Nexthink</b> vous propose des solutions informatiques spécialisée
                    dans la gestion de l&#39;expérience numérique des employés. En
                    fournissant des analyses en temps réel, de l&#39;automatisation et des
                    retours d&#39;expérience des employés, <b>Nexthink</b> permet aux
                    équipes informatiques de gérer et d&#39;améliorer de manière proactive
                    le lieu de travail numérique. Leur plateforme innovante aide les
                    organisations à améliorer la productivité, à réduire les coûts
                    informatiques et à garantir une expérience utilisateur fluide. Avec un
                    accent sur la satisfaction des utilisateurs finaux, <b>Nexthink</b>{' '}
                    permet aux entreprises d&#39;obtenir des informations approfondies sur
                    leur infrastructure informatique, d&#39;identifier et de résoudre
                    rapidement les problèmes, et de favoriser l&#39;amélioration continue
                    de leurs services informatiques.
                </p>
            </div>
        </section>
    );
}
