import type {Metadata} from "next";
import {Imbue} from "next/font/google";
import "./globals.css";
import {
    ClerkProvider,
} from '@clerk/nextjs'

const imbueSans = Imbue({
    variable: "--font-imbue-sans",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body
                className={`${imbueSans.variable} antialiased`}
            >
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}
