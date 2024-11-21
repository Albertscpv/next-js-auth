"use client";
import { signOut } from "next-auth/react"

const SignOutSession = () => {
    return(
        <button className="bg-white p-4 text-black" onClick={() => { signOut()}}>Cerrar Sesion</button>
    )
}
export default SignOutSession;