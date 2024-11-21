import { getServerSession } from "next-auth"
import Image from "next/image"
import SignOutButton from "./SignOutButton"



const  Home = async  () =>  {
    const session = await getServerSession()
    console.log(session)
  return(
    <div className="flex flex-col justify-center items-center min-h-screen gap-6">
      <span> Setting in Server Component</span>
      <h1 className="font-bold">
        Bienvenido {session?.user?.name}
      </h1>
      <Image className="rounded-lg" src={session?.user?.image || ""} alt="profile" width={200} height={200}/> 
        <SignOutButton/>
    </div>
  )
}
export default Home
