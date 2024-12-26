import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ROUTES from '@/constants/routes'

import TagCard from '../cards/TagCard'

const RightSideBar = () => {
    const hotQuestions = [
        {_id:"1", title:"How to create a custom hook in React?"},
        { _id:"2", title:"How to use React Query?"},
        {_id:"3", title:"How to use Redux?"},
        {_id:"4", title:"How to use React Router?"},
        {_id:"5", title:"How to use React Context?"},
    ]

    const popularTags = [
        {_id:"1", name:"javascript", questions: 100},
        {_id:"2", name:"python", questions: 150},
        {_id:"3", name:"next.js", questions: 200},
        {_id:"4", name:"typescript", questions: 120},
        {_id:"5", name:"react", questions: 80},
    ]

    return (
        <aside className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[330px] ">
            <div className='flex flex-col gap-7'>
                <h3 className='h3-bold text-dark200_light900'>Hot Network</h3>
                <div className='flex flex-col gap-8'>  
                    {
                        hotQuestions.map((question, index)=>(
                            <Link key={question._id} href={ROUTES.PROFILE(question._id)} className='flex cursor-pointer items-start gap-3'>
                                <Image src={`/icons/question-mark-${index%2 === 0 ? "orange":"blue"}.svg`} width={20} height={20} alt='question' />
                                <span className='body-medium text-dark500_light700'>{question.title}</span>
                            </Link>
                        ))
                    }
                    
                </div>
            </div>
            <div className='mt-16 flex flex-col gap-7'>
                <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
                <div className='flex flex-col gap-4'>
                    {popularTags.map((tag)=>(
                        <TagCard key={tag._id} _id={tag._id} name={tag.name} questions={tag.questions} showCount compact/>
                    ))}
                    
                    
                </div>
            </div>
        </aside>
    )
}

export default RightSideBar