"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import '@/styles.css';
import Cookies from 'js-cookie';
import Image from "next/image";

const projects = () => {

    const language = Cookies.get("selectedLanguage");

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);

    return (

        <div className='pentagon'>
            <Image width={1000} height={600} alt={"project Image"} src='/assets/images/projects/img6.webp' className={`fixed inset-0 w-full h-screen object-cover   transition-all duration-500 bg-white ${isHovered1 ? "opacity-60" : 'opacity-0'} `} style={{ zIndex: -100 }} />
            <Image width={1000} height={600} alt={"project Image"} src='/assets/images/projects/img7.webp' className={`fixed inset-0 w-full h-screen object-cover   transition-all duration-500 bg-white ${isHovered2 ? "opacity-60" : 'opacity-0'} `} style={{ zIndex: -100 }} />
            <Image width={1000} height={600} alt={"project Image"} src='/assets/images/projects/img8.jpeg' className={`fixed inset-0 w-full h-screen object-cover   transition-all duration-500 bg-white ${isHovered3 ? "opacity-60" : 'opacity-0'} `} style={{ zIndex: -100 }} />
            <Image width={1000} height={600} alt={"project Image"} src='/assets/images/projects/img9.jpg' className={`fixed inset-0 w-full h-screen object-cover   transition-all duration-500 bg-white ${isHovered4 ? "opacity-60" : 'opacity-0'} `} style={{ zIndex: -100 }} />
            <Image width={1000} height={600} alt={"project Image"} src='/assets/images/projects/img10.jpg' className={`fixed inset-0 w-full h-screen object-cover   transition-all duration-500 bg-white ${isHovered5 ? "opacity-60" : 'opacity-0'} `} style={{ zIndex: -100 }} />


            <p className="text-two-1 font-bold text-xl p-4">
                {language === "ka" ? "თავდაპირველად იყო სკოლა..." : "Originally there was a school..."}
            </p>

            <div className='flex flex-col items-center'>

                <div className='relative sm:w-[515px] w-[320px] sm:h-[485px] h-[300px] sm:text-xl text-sm font-black text-two-1'>

                    <Link href="/school" className="absolute projectsImage1 top-0 left-0 sm:w-[250px] w-[155px] aspect-square hover:text-two-2 hover:-translate-y-4 hover:-translate-x-3 transition-all duration-300" onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        <div className='relative w-full h-full flex justify-center items-center'>
                            <Image width={600} height={600} alt={"project Image"} src='/assets/images/projects/img1.png' className='w-full h-full absolute -z-50 inset-0' />
                            <p className='cursor-pointer z-50 sm:translate-x-10 translate-x-5 translate-y-5'>{language === "ka" ? "სკოლა" : "School"}</p>
                        </div>
                    </Link>

                    <Link href="/seminar" className="projectsImage2 absolute top-0 right-0 sm:w-[250px] w-[155px] aspect-square hover:text-two-2 hover:-translate-y-4 hover:translate-x-3 transition-all duration-300" onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}>
                        <div className='relative w-full h-full flex justify-center items-center'>
                            <Image width={600} height={600} alt={"project Image"} src='/assets/images/projects/img2.png' className='w-full h-full absolute -z-50 inset-0' />
                            <p className='cursor-pointer z-50 sm:-translate-x-10 -translate-x-3 translate-y-5'>{language === "ka" ? "სემინარი" : "Seminar"}</p>
                        </div>
                    </Link>

                    <Link href="/workshop" className="projectsImage3 absolute sm:top-[195px] right-0 sm:w-[245px] sm:h-[280px] top-[120px] w-[150px] h-[175px]  hover:text-two-2 hover:translate-y-2 hover:translate-x-4 transition-all duration-300" onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}>
                        <div className='relative w-full h-full flex justify-center items-center'>
                            <Image width={600} height={600} alt={"project Image"} src='/assets/images/projects/img3.png' className='w-full h-full absolute -z-50 inset-0' />
                            <p className='cursor-pointer z-50 -translate-y-7'>{language === "ka" ? "სახელოსნო" : "Workshop"}</p>
                        </div>
                    </Link>

                    <Link href="/garden" className="projectsImage4 absolute bottom-0 sm:left-[110px] sm:w-[295px] sm:h-[205px] left-[70px] w-[180px] h-[125px] hover:text-two-2 hover:translate-y-3 transition-all duration-300" onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}>
                        <div className='relative w-full h-full flex justify-center items-center'>
                            <Image width={600} height={600} alt={"project Image"} src='/assets/images/projects/img4.png' className='w-full h-full absolute -z-50 inset-0' />
                            <p className='cursor-pointer z-50 sm:translate-y-12 translate-y-7'>{language === "ka" ? "ბაღი" : "Garden"}</p>
                        </div>
                    </Link>

                    <Link href="/ridetherapy" className="projectsImage5 absolute sm:top-[190px] left-0 sm:w-[245px] sm:h-[280px] top-[120px] w-[150px] h-[175px] hover:text-two-2 hover:translate-y-2 hover:-translate-x-4 transition-all duration-300" onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}>
                        <div className='relative w-full h-full flex justify-center items-center'>
                            <Image width={600} height={600} alt={"project Image"} src='/assets/images/projects/img5.png' className='w-full h-full absolute -z-50 inset-0' />
                            <p className='cursor-pointer z-50  -translate-y-7'>{language === "ka" ? "რაიდთერაპია" : "Ride Therapy"}</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="text-two-1 font-bold md:text-base sm:text-sm text-xs px-6 text-center py-12">
                <p> {language === "ka" ? "პროექტები ერთმანეთისგან დამოუკიდებელი და ავტონომიურია, თუმცა მათ შორის არა კონკურენციის, არამდენ ძმობისა და ურთიერთდახმარების პრინციპი მოქმედებს." : "The projects are independent and autonomous from each other, although the principle of not competition, rather brotherhood and mutual assistance applies between them."}
                </p>
                <p> {language === "ka" ? "გარდა ამ პროექტებისა, პარსიფალი ყოველწლიურად აორგანიზებს, როგორც საერთაშორისო, ისე ლოკალურ კონფერენციებს ახალგაზრდებისთვის." : "In addition to these projects, Parsifal organizes both international and local conferences for young people every year."}
                </p>
                <p className="pb-8"> {language === "ka" ? "2023 წლის აგვისტოში, პარსიფალის ინიციატივით ჩატარდა საერთაშორისო ახალგაზრდული კონფერენცია. ხოლო, 2024 წლისთვის იგეგმება პედაგოგიური კონფერენციის ჩატარება ახალგაზრდა მასწავლებლებისთვის." : "In August 2023, on the initiative of Parsifal, an international youth conference was held. And by 2024, it is planned to hold a pedagogical conference for young teachers."}
                </p>

                <Link href='' type="button" className='block px-8 py-3 border-2 border-two-1 bg-four-4 text-two-1 rounded-full'>{language === "ka" ? "გაიგეთ მეტი 2023 წლის საერთაშორისო ახალგაზრდულ კონფერენციაზე" : "Find out more at the 2023 International Youth Conference"}</Link>
            </div>


        </div>

    )
}

export default projects