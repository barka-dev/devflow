import Image from 'next/image';
import React from 'react'

import { signOut } from '@/auth';
import ROUTES from '@/constants/routes';
import { cn } from '@/lib/utils';

import { Button } from './ui/button';

const LogoutButton = ({isMobileNav = false}:{isMobileNav:boolean}) => {
  return (
    <form action={async()=>{
        "use server";
        await signOut({redirectTo: ROUTES.SIGN_IN});
      }}>
        <Button type="submit" className='flex-start flex min-h-[56px] w-full gap-4 !bg-transparent p-4 shadow-none'>
            <Image src="/icons/logout.svg" alt="Logout" width={24} height={24}  className='invert-colors'/>
            <span className={cn(!isMobileNav && "max-lg:hidden", 'base-medium text-dark300_light900 ')}>Logout</span>
        </Button>
    </form>
  )
}

export default LogoutButton