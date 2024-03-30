"use client"
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export function Appbar(){
    const router= useRouter()
    return (
        <div>
            <button onClick={() => {
                signIn()
            }}>Login</button>
            <button onClick={() => {
                signOut()
            }}>Logout</button>
        </div>
    )
}