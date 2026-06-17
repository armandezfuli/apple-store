"use client"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "../../shared/ThemeToggle"

const navLinks = [
    { label: "Store", href: "/" },
    { label: "Mac", href: "/" },
    { label: "iPhone", href: "/" },
    { label: "iPad", href: "/" },
    { label: "Watch", href: "/" },
    { label: "AirPods", href: "/" },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 48)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-6 border-b transition-all duration-200",
                isScrolled
                    ? "bg-white/80 dark:bg-[oklch(0.1468_0.0439_260.47)]/80 backdrop-blur-md border-black/10 dark:border-white/10"
                    : "bg-white dark:bg-[oklch(0.1468_0.0439_260.47)] border-transparent"
            )}>
            <div>
                <Link href="/">
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                </Link>
            </div>
            <nav>
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-sm text-gray-800 hover:text-gray-500 transition-colors dark:text-gray-200 dark:hover:text-gray-50">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="hidden md:flex items-center gap-4">
                <ThemeToggle />
                <button className="p-1 hover:opacity-70 transition-opacity">
                    <Search className="h-4 w-4" />
                </button>
                <button className="p-1 hover:opacity-70 transition-opacity">
                    <ShoppingBag className="h-4 w-4" />
                </button>
                <Link href="/sign-in">
                    <User className="h-4 w-4" />
                </Link>
            </div>

            <div className="flex items-center gap-3 md:hidden">
                <ThemeToggle />
                <button className="p-1 hover:opacity-70 transition-opacity">
                    <Search className="h-4 w-4" />
                </button>
                <button className="p-1 hover:opacity-70 transition-opacity">
                    <ShoppingBag className="h-4 w-4" />
                </button>
                <Link href="/sign-in" className="hover:opacity-70 transition-opacity">
                    <User className="h-4 w-4" />
                </Link>

                <Sheet>
                    <SheetTrigger asChild>
                        <button className="md:hidden p-1">
                            <Menu className="h-5 w-5" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-full max-w-xs bg-white dark:bg-[oklch(0.1468_0.0439_260.47)]/90 backdrop-blur-md border-none pl-8">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <nav className="mt-16">
                            <ul className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-lg font-medium transition-colors hover:text-muted-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
