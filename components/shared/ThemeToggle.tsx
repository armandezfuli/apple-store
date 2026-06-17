"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Monitor } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const ThemeIcon = () => {
        if (theme === "dark") return <Moon className="h-4 w-4" />
        if (theme === "system") return <Monitor className="h-4 w-4" />
        return <Sun className="h-4 w-4" />
    }
    if (!mounted) {
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="p-1 hover:opacity-70 transition-opacity  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                    <ThemeIcon />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="bg-white dark:bg-[oklch(0.1468_0.0439_260.47)] backdrop-blur-md border border-white/10">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="cursor-pointer">
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer">
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="cursor-pointer">
                    <Monitor className="h-4 w-4 mr-2" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
