// components/ui/navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navigation = [
        { name: 'Home', href: '/home' },
        { name: 'Find Jobs', href: '/findjobs' },
        { name: 'Blog', href: '/blog' },
        { name: 'About Us', href: '/aboutus' },
        { name: 'Contact Us', href: '/contactpage' },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container flex h-25 items-center justify-between md:justify-around px-4">
                {/* Logo */}
                <Link href="/home" className="flex items-center gap-2">
                    <Image
                        src="/imgs/Dreamjob3.png"
                        alt="Logo image"
                        width={120}
                        height={40}
                        className="ml-5 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-6 ">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-semibold text-foreground/70 hover:text-black transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-4 mt-1">
                    <Button variant="outline" asChild>

                        <SignedOut>
                            <div className="flex gap-4">
                                <div className=" rounded-lg w-20 text-center py-1.5 h-10 font-bold "><SignUpButton /></div>
                                <div className="bg-black rounded-lg w-20 text-center text-white py-1.5 h-10 font-bold hover:bg-gray-500"> <SignInButton /></div>
                            </div>
                        </SignedOut>
                    </Button>

                    <SignedIn>
                        <div className=""><UserButton /></div>
                    </SignedIn>

                </div>

                {/* Mobile Menu Button */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            aria-label="Open menu"
                        >
                            <Menu className=" h-6 w-6" />
                        </Button>
                    </SheetTrigger>

                    {/* Mobile Navigation */}
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-start mb-8">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <Image
                                        src="/imgs/Dreamjob3.png"
                                        alt="DreamJob"
                                        width={120}
                                        height={40}
                                        className=" w-auto"
                                    />
                                </Link>



                            </div>

                            <div className="flex flex-col ml-3 mb-2 space-y-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base font-medium hover:text-primary transition-colors"
                                    >
                                        {item.name}

                                    </Link>


                                ))}
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>

                            <div className="mt-auto mb-10 ml-2 mr-2 space-y-2 pt-8">
                                <Button variant="outline" asChild>

                                    <SignedOut>
                                        <div className="flex gap-4">
                                            <div className=" rounded-lg w-20 text-center py-1.5 h-10 font-bold "><SignUpButton /></div>
                                            <div className="bg-black rounded-lg w-20 text-center text-white py-1.5 h-10 font-bold hover:bg-gray-400"> <SignInButton /></div>
                                        </div>
                                    </SignedOut>

                                </Button>

                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div >
        </nav >
    )
}