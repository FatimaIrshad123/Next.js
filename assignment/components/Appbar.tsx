import Link from "next/link";

export function Appbar(){
    return (
        <div className=''>
        <div className="md:flex justify-center p-16">
            <div className="m-5 border-2 rounded-lg shadow-lg border-gray-400 px-5 p-3">
                <Link href='/'>Home</Link>
            </div>
            <div className="m-5 border-2 rounded-lg shadow-lg border-gray-400 px-5 p-3 md:mx-32">
                <Link href='/static-page'>Server Side</Link>
            </div>
            <div className="m-5 border-2 rounded-lg shadow-lg border-gray-400 px-5 p-3">
                <Link href='/interactive-page'>Client Side</Link>
            </div>
        </div>
        </div>
    )
}