import type {Metadata} from "next";
import { Montserrat, Nunito, Roboto} from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
})

const roboto = Roboto({
    weight: ["400"],
    variable: "--font-roboto",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "NexThink",
    description: "Your partner towards the right solution",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
           <link rel="icon" href="/logo/favicon_logo.png"/>
        </head>
        <body
            className={` ${roboto.variable} ${montserrat.variable} ${nunito.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
