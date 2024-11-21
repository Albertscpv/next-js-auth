"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import SignOutButton from "@/app/dashboard/SignOutButton"


const ProfilePage = () => {
    const { data: session, status, update } = useSession();
    if(status === "loading" ) return <div>Loading...</div>

    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-6">
            <span>Settings in Client Component</span>
        <h1 className="font-bold">
          Bienvenido {session?.user?.name}
        </h1>
        <Image className="rounded-lg" src={session?.user?.image || ""} alt="profile" width={200} height={200}/> 
          <SignOutButton/>
      </div>
    )

}
export default ProfilePage;