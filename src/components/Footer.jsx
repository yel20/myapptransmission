import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-white shadow h-20 flex justify-center dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4  md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Undefined Limits™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#home" className="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline me-4 md:me-6">Sobre el Proyecto</a>
                    </li>
                    <li>
                        <a href="#team" className="hover:underline me-4 md:me-6">Equipo</a>
                    </li>

                </ul>
            </div>
        </footer>

    );
};

export default Footer;

