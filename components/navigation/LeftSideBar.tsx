import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { auth } from '@/auth'
import LogoutButton from '@/components/LogoutButton'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'

import NavLinks from './navbar/NavLinks'

const LeftSideBar = async() => {
    const session = await auth();
    return (
        <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">

            <div className="flex flex-1 flex-col gap-6">
                <NavLinks isMobileNav={false}/>
            </div>

            <div className="flex flex-col gap-3">
            { !session?.user
                ?(<>
                    <Link href={ROUTES.SIGN_IN}>
                        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                            <Image src='/icons/account.svg' alt='Menu' width={20} height={20} className="invert-colors lg:hidden"/>
                            <span className="primary-text-gradient max-lg:hidden">Sign In</span>
                        </Button>
                    </Link>

                    <Link href={ROUTES.SIGN_UP}>
                        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                            <Image src='/icons/sign-up.svg' alt='Menu' width={20} height={20} className="invert-colors lg:hidden"/>
                            <span className='max-lg:hidden'>Sign Up</span>
                        </Button>
                    </Link>
                </>)
                :(<LogoutButton isMobileNav={false}/>)
            }
        
            </div>
        </section>
      
    )
}

export default LeftSideBar