import { auth } from "@/auth";


const Home = async() => {
  const session = await auth();
  console.log("Session",session);

  return (
    <>
      <h1 className="text-3xl font-black text-purple-400 dark:text-white">Home</h1>
    </>
  )
};

export default Home;
