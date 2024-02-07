import React from 'react';
import '@/styles.css';
import enText from "@/public/languages/en.json";
import kaText from "@/public/languages/ka.json";
import Gallery from '@/components/shared/gallery';
import { cookies } from 'next/headers';
import photoCollection from '@/public/photos/photos.json';
import ProjectsNavRidetherapy from '@/components/shared/projectsNav/projectsNavRidetherapy';
import { Footer } from '@/components/shared/Footer';
import Image from "next/image";

export default async function Ridetherapy() {

    const photos = photoCollection.ridetherapy;

    const selectedLanguage = cookies().get('selectedLanguage');
    let language = selectedLanguage?.value;
    let texts;

    if (language === "ka") {
        texts = kaText;
    } else if (language === "en") {
        texts = enText;
    }

    return (
        <>

            <div className={`relative min-h-screen md:p-0 px-[6%] pt-[6%]`}>

                <Image width={1000} height={600} src="/assets/images/ridetherapy/img1.jpg" alt="ridetherapy Photo"
                    className="md:absolute relative inset-0 h-full w-full object-cover -z-10 md:p-0 px-2 md:flex hidden" />

                <div className='md:absolute relative lg:w-1/2 md:w-10/12 md:top-16 md:right-12 w-full md:bg-four-1 z-10 shadow-ridetherapy text-two-1 rounded-3xl md:p-7 p-2 text-justify text-sm leading-relaxed'>

                    <h1 className='text-start md:text-2xl text-xl pb-3 font-black'>{texts?.ridetherapy.text1[0]}</h1>

                    <p className='mb-3'>{texts?.ridetherapy.text1[1]}</p>
                    <p>{texts?.ridetherapy.text1[2]}</p>
                </div>

                <Image width={600} height={300} src="/assets/images/ridetherapy/img1.jpg" alt="ridetherapy Photo"
                    className="relative h-full w-full object-cover -z-10 p-2 md:hidden flex" />


            </div>

            <div>
                <ProjectsNavRidetherapy />
            </div>

            <div className='md:pt-[6%] px-[6%]' id="one">
                <div className="w-full md:border-4 border-projects-5 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[60%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <Image width={1000} height={600}
                            src="/assets/images/ridetherapy/img2.jpg" alt="ridetherapy Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.ridetherapy.text2[0]}</h1>
                        <p className='mb-4'>{texts?.ridetherapy.text2[1]}</p>
                        <p>{texts?.ridetherapy.text2[2]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <Image width={600} height={300}
                            src="/assets/images/ridetherapy/img2.jpg" alt="ridetherapy Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='p-[6%]' id="two">
                <div className="w-full md:border-4 border-projects-5 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[45%] w-full float-left relative top-0 right-0 lg:pe-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <Image width={1000} height={600}
                            src="/assets/images/ridetherapy/img3.jpg" alt="ridetherapy Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.ridetherapy.text3[0]}</h1>
                        <p className='mb-4 pb-2'>{texts?.ridetherapy.text3[1]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <Image width={600} height={300}
                            src="/assets/images/ridetherapy/img3.jpg" alt="ridetherapy Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <section className="px-[6%] pb-[3%]" id="three">
                <h1 className='px-12 pb-6 pt-12 block md:text-3xl text-2xl font-black text-two-1'>
                    {language === "ka" ? "გალერეა" : "Gallery"}
                </h1>

                <hr className={`bg-projects-5 h-[3px] border-0 mb-8`} />

                <Gallery photos={photos} />
            </section>

            <Footer />

        </>
    )
}
