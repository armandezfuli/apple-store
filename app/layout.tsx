import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Providers from "./providers"
import Navbar from "@/components/layout/Navbar/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
    title: "Apple Store",
    description: "Apple Store for sell macbook,iphone,airpad and etc...",
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="en"
            className={`h-full antialiased font-sans ${inter.variable}`}
            suppressHydrationWarning>
            <body className="min-h-full flex flex-col">
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
