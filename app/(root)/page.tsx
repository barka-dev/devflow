import Link from "next/link";

import LocalSearch from "@/components/localSearch/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn JavaScript?",
    description: "I am new to programming and want to learn JavaScript. Any suggestions?",
    tags:[
      {_id: "1", name:"javascript"},
      {_id: "2", name:"beginner"},
    ],
    author:{
      _id:"1",
      name:"John Doe",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Best practices for Python development?",
    description: "What are some best practices for developing applications in Python?",
    tags:[
      {_id: "3", name:"python"},
      {_id: "4", name:"best practices"},
    ],
    author:{
      _id:"2",
      name:"Jane Smith",
    },
    upvotes: 20,
    answers: 10,
    views: 200,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to optimize Java code?",
    description: "I am looking for ways to optimize my Java code for better performance.",
    tags:[
      {_id: "5", name:"java"},
      {_id: "6", name:"optimization"},
    ],
    author:{
      _id:"3",
      name:"Alice Johnson",
    },
    upvotes: 15,
    answers: 8,
    views: 150,
    createdAt: new Date(),
  }
]

interface SearchParams{
  searchParams: Promise<{[key:string]:string}>
}

const Home = async ({searchParams}: SearchParams) => {
  const {query = ""} = await searchParams;

  const filteredQuestions = questions.filter((question)=>question.title.toLocaleLowerCase().includes(query?.toLowerCase()));
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-7 py-3" asChild>
          <Link href={ROUTES.ASK_QUESTION} className="paragraph-semibold !text-light-900">Ask a Question</Link>
        </Button>
      </section>

      <section className="mt-7">
        <LocalSearch route="/" imgSrc="/icons/search.svg" placeholder="Search..." otherClasses="flex-1"/>
      </section>
      {/* HomeFilter */}

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question)=> <h1 key={question._id}>{question.title}</h1>)}
      </div>
    </>
  )
};

export default Home;
