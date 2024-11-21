"use client"

import { signIn } from "next-auth/react";

const LoginPage = () => {
    return(
            <div className="flex flex-col justify-center items-center min-h-screen gap-6">
            <div>
                <h2>Login con github</h2>
                <button className="p-4 bg-white text-black"
                        onClick={async () => {
                        const result = await signIn("github", {
                                callbackUrl: "/dashboard",
                                redirect: false 
                            })
                        console.log(result)
                    }}
                >
                        Log In
                </button>
            </div>
        </div>
    )
}
export default LoginPage;