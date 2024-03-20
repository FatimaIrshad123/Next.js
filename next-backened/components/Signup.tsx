"use client"
import axios from "axios"
import { useState } from "react"

export function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="flex justify-center">
            <div>
                <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/><br/>
                <input type="password" placeholder="Enter name" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <button onClick={() => {
                    axios.post('http://localhost:3000/api/user',{
                        email: email,
                        password: password
                    })
                }}>Signup</button>
            </div>
        </div>
    )
}