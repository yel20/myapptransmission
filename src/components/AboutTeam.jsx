"use client"
// import { useEffect } from 'react';
// import gsap from 'gsap';




const AboutTeam = () => {
    // useEffect(() => {
    //     // Animación de entrada utilizando GSAP
    //     gsap.to('.team-members', {
    //         duration: 2,
    //         x: 100,
    //         backgroundColor: "green", // Agregar un ligero retraso entre cada tarjeta
    //         borderRadius: "20",
    //         border: "5px solid blue",
    //         ease: 'slatic',
    //     });
    // }, []);
    return (
        <div className=" py-12 flex justify-center items-center min-h-screen" id="team">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-white mb-11 text-center">Sobre el Equipo</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="card bg-white p-4 rounded-lg shadow-md team-member transition-all cursor-pointer">
                        <img className="rounded-full h-20 w-20 mx-auto mb-4" src="https://avatars.githubusercontent.com/u/53017644?v=4" alt="Team Member"/>
                        <h3 className="text-xl font-semibold mb-2 text-center">Alejandro Avile</h3>
                        <p className="text-gray-600 mb-2 text-center text-white">Innovador, abordando proyectos desde múltiples perspectivas.</p>
                        <p className="text-gray-600 mb-2 rol">Rol:Desarrollador FullStack</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/Sirius2051"  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="card bg-white p-4 rounded-lg shadow-md team-member transition-all cursor-pointer">
                        <img className="rounded-full h-20 w-20 mx-auto mb-4" src="https://avatars.githubusercontent.com/u/108538705?v=4" alt="Team Member" />
                        <h3 className="text-xl font-semibold mb-2 text-center">Yelson Gomez</h3>
                        <p className="text-gray-600 mb-2 text-center text-white">Creativo, diseñando interfaces web cautivadoras.</p>
                        <p className="text-gray-600 mb-2 rol">Rol: Desarrollador Frontend</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/yel20"  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="card bg-white p-4 rounded-lg shadow-md team-member transition-all cursor-pointer">
                        <img className="rounded-full h-20 w-20 mx-auto mb-4" src="https://avatars.githubusercontent.com/u/46578970?v=4" alt="Team Member" />
                        <h3 className="text-xl font-semibold mb-2 text-center text-white">Alonzo Diaz</h3>
                        <p className="text-gray-600 mb-2 text-center text-white">Innovador, abordando proyectos desde múltiples perspectivas.</p>
                        <p className="text-gray-600 mb-2 rol">Rol: Desarrollador Backend</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/AztFireSpell"  className="text-white bg-[#090f16] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="card bg-white p-4 rounded-lg shadow-md team-member transition-all cursor-pointer">
                        <img className="rounded-full h-20 w-20 mx-auto mb-4" src="https://avatars.githubusercontent.com/u/134451910?v=4" alt="Team Member" />
                        <h3 className="text-xl font-semibold mb-2 text-center">Homer Sifontes</h3>
                        <p className="text-gray-600 mb-2 text-center text-white">Creativo y diseñador</p>
                        <p className="text-gray-600 mb-2 rol">Rol: Apoyo Creativo</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/yel20"  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                                Github
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutTeam;


