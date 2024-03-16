"use client"

import { useState } from "react"

export default function InteractivePage(){
    const [count, setCount] = useState(0)
    return (
    <div className="p-5 mx-72">
        <div className="justify-center">
            <h1 className="font-bold text-3xl m-3">Welcome to Interactive Page</h1>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                 in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="p-2 px-4 my-4 border-2 border-black rounded-lg shadow-lg" onClick={() => setCount(count+1)}>Count is {count}</button>
        </div>

    </div>
  )
}