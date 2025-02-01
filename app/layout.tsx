"use client";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import { SideMenu } from "@/app/components/sidemenu";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // ✅ Must be inside the function

    return (
        <html lang="en">
        <head>
            <ThemeModeScript />
        </head>
        <body className={inter.className}>
        <main className="min-h-screen dark:bg-gray-800 flex flex-row">
            {/* Sidebar that stays persistent on all pages */}
            <SideMenu companyName="TechSolutions" />

            {/* Page Content - Dynamically renders the children */}
            <div className="w-full h-full bg-white dark:bg-gray-700 p-4">
                {children} {/* ✅ This renders the actual page */}
            </div>
        </main>
        </body>
        </html>
    );
}
