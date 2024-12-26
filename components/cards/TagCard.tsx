
import Link from 'next/link';
import React from 'react'

import { badgeVariants } from "@/components/ui/badge"
import ROUTES from '@/constants/routes';
import { getDeviconClassName } from '@/lib/utils';

interface Props{
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({_id, name, questions, showCount, compact}: Props) => {
  const icon = getDeviconClassName(name);
  return (
    <div className='flex items-center justify-between'>
        <Link href={ROUTES.TAGS(_id)} className={`${badgeVariants({ variant: "outline" })} background-light800_dark300 flex w-fit gap-1 rounded-md border-none px-4 py-2`}>
            <i className={`${icon}`}></i>
            <p className='subtle-medium uppercase text-light-400'>{name}</p>
        </Link>
        {questions && showCount  && <p className='small-medium text-dark500_light700'>{questions}</p>}
    </div>
  )
}

export default TagCard