import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ROUTES from "@/constants/routes";


const Home = async() => {
  const session = await auth();
  console.log("Session",session);

  return (
    <>
      <h1 className="text-3xl font-black text-purple-400 dark:text-white">Home</h1>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          <DropdownMenuItem>Dark</DropdownMenuItem>
          <DropdownMenuItem>Light</DropdownMenuItem>
          <DropdownMenuItem>System</DropdownMenuItem>
          {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
      <form className="px-10 pt-[100px]" action={async()=>{
        "use server";
        await signOut({redirectTo: ROUTES.SIGN_IN});
      }}>
        <Button type="submit">Log out</Button>
      </form>
    </>
  )
};

export default Home;
