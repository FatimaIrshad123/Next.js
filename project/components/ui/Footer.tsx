export default function Footor(){
    return (
        <div>
            <footer className="bg-black text-gray-400 py-12">
                <div className="max-w-6xl mx-auto grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                    <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Qui enim fugiat duis in occaecat fugiat labore ullamco sunt ea mollit consequat anim incididunt. Consectetur cupidatat elit excepteur pariatur sunt ut ad. Non in ut ex cupidatat aliqua dolor ut. Deserunt id id consequat deserunt magna eiusmod. 
                    </p>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">Courses</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Follow us</h2> 
                        <div>
                            <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                            <a href="#" className="hover:text-white transition-colors duration-300 px-4">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-4">Contact us</h2> 
                        <p>Quetta, Pakistan</p>
                        <p>Quetta 1111</p>
                        <p>Email: abc@gmail.com</p>
                    </div>
                </div>
                <p className="text-center text-xs pt-2">@2024 Music School. All rights reserved</p>
            </footer>
        </div>
    )
}