"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { SheetClose } from '@/components/ui/sheet'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'

const NavLinks = ({isMobileNav = false}: {isMobileNav:boolean}) => {
    const pathname = usePathname();
    const userId = 1

    return (
        <>
            {
                sidebarLinks.map((item, index) => {
                    const isActive = (pathname.includes(item.route) && item.route.length > 1) || item.route === pathname;

                    if (item.route === "/profile"){
                        if (userId) item.route = `/profile/${userId}`;
                        else return null
                    }

                    const linkComponent = (
                        <Link 
                            href={item.route} 
                            key={index} 
                            className={cn(
                                isActive 
                                ? "primary-gradient rounded-lg text-light-900"
                                :"text-dark300_light900"
                                ,"flex items-center justify-start gap-4 bg-transparent p-4")}
                        >
                            <Image src={item.imgUrl} alt={item.label} width={24} height={24} className={cn({"invert-colors": !isActive})}/>
                            <p className={cn(isActive ? "base-bold": "base-medium", !isMobileNav && "max-lg:hidden")}>{item.label}</p>
                        </Link>
                    )

                    return isMobileNav ? (
                        <SheetClose asChild key={index}>
                            {linkComponent} 
                        </SheetClose>
                    ): <React.Fragment key={index}>{linkComponent}</React.Fragment>
                })
            }
        </>
    )
}

export default NavLinks