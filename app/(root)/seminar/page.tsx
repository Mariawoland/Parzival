"use client";
import React, { useState, useEffect } from 'react';
import '@/styles.css';
import enText from "@/public/languages/en.json";
import kaText from "@/public/languages/ka.json";
import Link from 'next/link';
import Gallery from '@/components/shared/gallery';
import Cookies from 'js-cookie';
import photoCollection from '@/public/photos/photos.json';
import ProjectsNavSeminar from '@/components/shared/projectsNav/projectsNavSeminar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "next/image";
import '@/styles.css';

export default function Seminar() {

    const photos = photoCollection.seminar;

    const language = Cookies.get('selectedLanguage');
    let texts;

    if (language === "ka") {
        texts = kaText;
    } else if (language === "en") {
        texts = enText;
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>

            <div className={`relative min-h-screen md:p-0 px-[6%] pt-[6%]`}>

                <Image width={1000} height={600} src="/assets/images/seminar/img1.webp" alt="Seminar Photo"
                    className="md:absolute relative inset-0 h-full w-full object-cover -z-10 md:p-0 px-2 md:flex hidden" />

                <div className='md:absolute relative lg:w-3/5 md:w-10/12 md:top-16 md:right-12 w-full md:bg-four-1 z-10 shadow-seminar text-two-1 rounded-3xl md:p-7 p-2 text-justify text-sm leading-relaxed'>

                    <h1 className='text-start md:text-2xl text-xl pb-3 font-black'>{texts?.seminar.text1[0]}</h1>

                    <p className='mb-3'>{texts?.seminar.text1[1]}</p>
                    <p className='mb-3'>{texts?.seminar.text1[2]}</p>
                    <p>{texts?.seminar.text1[3]}</p>
                    <a href='https://drive.google.com/file/d/14ZqoH7BUiVOnnJTJUYXziU957Snzx6Eo/view?pli=1' className='flex justify-center text-center border-2 font-black transition-all duration-300 tracking-wider border-six-1 hover:border-six-2 text-six-1 hover:text-four-1 bg-four-4 hover:bg-six-2 w-full rounded-full mt-4 p-3 text-base'>{texts?.seminar.text1[4]}</a>
                </div>

                <Image width={600} height={1000} src="/assets/images/seminar/img1.webp" alt="seminar Photo"
                    className="relative h-full w-full object-cover -z-10 p-2 md:hidden flex" />


            </div>

            <div>
                <ProjectsNavSeminar />
            </div>

            <div className='md:pt-[6%] px-[6%]' id="one">
                <div className="w-full md:border-4 border-six-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div className="lg:w-[60%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <Gallery photos={photos} />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-xs  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.seminar.text2[0]}</h1>
                        <p className='mb-4'>{texts?.seminar.text2[1]}</p>
                        <div className='p-2 text-start mb-4'>
                            <p>{texts?.seminar.text2[2]}</p>
                            <p>{texts?.seminar.text2[3]}</p>
                            <p>{texts?.seminar.text2[4]}</p>
                            <p>{texts?.seminar.text2[5]}</p>
                            <p>{texts?.seminar.text2[6]}</p>
                        </div>
                        <p className='mb-4'>{texts?.seminar.text2[7]}</p>
                        <p className='mb-4'>{texts?.seminar.text2[8]}</p>
                        <p className='mb-4'>{texts?.seminar.text2[9]}</p>
                        <p>{texts?.seminar.text2[10]}</p>
                        <p>{texts?.seminar.text2[11]}</p>
                        <p className='mb-4'>{texts?.seminar.text2[12]}</p>
                        <a href="https://www.facebook.com/parzivalyouthseminar" className='mb-4'>{texts?.seminar.text2[13]}</a>

                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <Gallery photos={photos} />
                    </div>

                </div>
            </div>

            <div className='p-[6%]'>
                <div className="w-full md:border-4 border-six-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[45%] w-full float-left relative top-0 right-0 lg:pe-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <iframe className='w-full aspect-video' src={texts?.seminar.text3[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 md:text-end text-center'>{texts?.seminar.text3[1]}</h1>
                        <p className='pb-2'>{texts?.seminar.text3[2]}</p>
                        <p className='pb-2'>{texts?.seminar.text3[3]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full md:hidden block py-4">
                        <iframe className='w-full aspect-video' src={texts?.seminar.text3[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                    </div>

                </div>
            </div>

            <img id="two"
                src={language === "ka" ? "/assets/images/seminar/img3.png" : "/assets/images/seminar/img2.png"} alt="seminar Photo"
                className="w-full pb-[6%]"
            />

            <div className='px-[6%]'>
                <div className="w-full md:border-4 border-six-1 rounded-3xl md:overflow-hidden md:p-12 md:bg-four-3 transition-all duration-300 flex lg:flex-row flex-col  justify-center items-center gap-5">

                    <div data-aos="fade-right" className="lg:w-1/2 w-full text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.seminar.text4[0]}</h1>
                        <p className='pb-4'>{texts?.seminar.text4[1]}</p>
                        <p className='mb-4'>{texts?.seminar.text4[2]}</p>
                        <p className='mb-4'>{texts?.seminar.text4[3]}</p>
                        <p className='mb-4'>{texts?.seminar.text4[4]}</p>
                        <p className='mb-4'>{texts?.seminar.text4[5]}</p>

                    </div>

                    <iframe className="lg:w-1/2 w-full aspect-video" src="https://www.youtube.com/embed/fidOS-B5CVI?si=6nuxeVE_M_mpRRyi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                </div>
            </div>

            <section className="p-[6%]" id="three">

                <Tabs>
                    <TabList className="flex gap-[6px] w-full text-two-2 font-bold leading-loose">
                        <Tab className="flex justify-center items-center grow cursor-pointer py-4 bg-six-1 rounded-t-2xl customTabs hover:bg-six-3 hover:text-six-4">{windowWidth > 800 ? texts?.seminar.text5[0][0] : texts?.seminar.text5[1][0]}</Tab>
                        <Tab className="flex justify-center items-center grow cursor-pointer p-3 bg-six-1 rounded-t-2xl customTabs hover:bg-six-3 hover:text-six-4">{windowWidth > 800 ? texts?.seminar.text5[0][1] : texts?.seminar.text5[1][1]}</Tab>
                        <Tab className="flex justify-center items-center grow cursor-pointer p-3 bg-six-1 rounded-t-2xl customTabs hover:bg-six-3 hover:text-six-4">{windowWidth > 800 ? texts?.seminar.text5[0][2] : texts?.seminar.text5[1][2]}</Tab>
                        <Tab className="flex justify-center items-center grow cursor-pointer p-3 bg-six-1 rounded-t-2xl customTabs hover:bg-six-3 hover:text-six-4">{windowWidth > 800 ? texts?.seminar.text5[0][3] : texts?.seminar.text5[1][3]}</Tab>
                    </TabList>

                    <TabPanel className='bg-six-5 activePanel rounded-b-2xl'>

                        <div className="flex md:flex-row p-5 flex-col gap-5 rounded-b-2xl w-full h-full">
                            <div className='w-1/3 md:flex hidden'>
                                <img src={texts?.seminar.text5[2][0]} className='w-full' />
                            </div>

                            <div className='md:w-2/3 w-full flex flex-col items-center justify-center gap-8  p-4'>
                                <h1 className='text-six-1 lg:text-3xl md:text-2xl text-xl font-bold'>
                                    {texts?.seminar.text5[2][2]}
                                </h1>
                                <p className="text-sm text-two-1">{texts?.seminar.text5[2][3]}</p>
                                <a href='https://drive.google.com/file/d/14ZqoH7BUiVOnnJTJUYXziU957Snzx6Eo/view?pli=1' className='flex justify-center text-center border-2 font-black transition-all duration-300 tracking-wider border-six-1 hover:border-six-2 text-six-1 hover:text-four-1 bg-four-4 hover:bg-six-2 w-full rounded-full mt-4 p-3 text-base'>{texts?.seminar.text1[4]}</a>
                            </div>

                            <div className='w-full md:hidden flex'>
                                <img src={texts?.seminar.text5[2][1]} className='w-full' />
                            </div>
                        </div>

                    </TabPanel>

                    <TabPanel className='bg-six-5 activePanel'>

                        <div className="flex p-5 flex-col gap-8 rounded-b-2xl w-full text-two-2  leading-loose">

                            <div className='w-full text-center'>
                                <p className='font-bold text-base'>
                                    {texts?.seminar.text5[3][0]}
                                </p>
                                <p className='italic text-sm'>
                                    {texts?.seminar.text5[3][1]}
                                </p>

                            </div>

                            <div className='flex gap-5 md:flex-row flex-col h-full'>

                                <div className='md:w-1/3 w-full flex flex-col justify-between min-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[3][2]}
                                        </p>
                                        <p className='text-sm pb-3 text-justify'>
                                            {texts?.seminar.text5[3][3]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[3][4]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[3][5]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[3][6]}
                                        </p>
                                    </div>

                                </div>

                                <div className='md:w-1/3 w-full flex flex-col justify-between mimn-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[3][7]}
                                        </p>
                                        <p className='text-sm pb-3 text-justify'>
                                            {texts?.seminar.text5[3][8]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[3][9]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[3][10]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[3][11]}
                                        </p>
                                    </div>

                                </div>

                                <div className='md:w-1/3 w-full flex flex-col justify-between min-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[3][12]}
                                        </p>
                                        <p className='text-sm pb-3 text-justify'>
                                            {texts?.seminar.text5[3][13]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[3][14]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[3][15]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[3][16]}
                                        </p>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel className='bg-six-5 activePanel'>
                        <div className="flex p-5 flex-col gap-5 rounded-b-2xl w-full h-full text-two-2">

                            <div className='w-full text-center'>
                                <p className='font-bold text-base'>
                                    {texts?.seminar.text5[4][0]}
                                </p>
                                <p className='italic text-sm'>
                                    {texts?.seminar.text5[4][1]}
                                </p>
                            </div>

                            <div className='flex gap-5 md:flex-row flex-col h-full'>

                                <div className='md:w-1/3 w-full flex flex-col justify-between min-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[4][2]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[4][3]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[4][4]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[4][5]}
                                        </p>
                                    </div>

                                </div>

                                <div className='md:w-1/3 w-full flex flex-col justify-between mimn-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[4][6]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[4][7]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[4][8]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[4][9]}
                                        </p>
                                    </div>

                                </div>

                                <div className='md:w-1/3 w-full flex flex-col justify-between min-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[4][10]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[4][11]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[4][12]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[4][13]}
                                        </p>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </TabPanel>

                    <TabPanel className='bg-six-5 activePanel'>
                        <div className="flex p-5 flex-col gap-5 rounded-b-2xl w-full h-full text-two-2">

                            <div className='w-full text-center'>
                                <p className='font-bold text-base'>
                                    {texts?.seminar.text5[5][0]}
                                </p>
                                <p className='italic text-sm'>
                                    {texts?.seminar.text5[5][1]}
                                </p>
                            </div>

                            <div className='flex gap-5 md:flex-row flex-col h-full'>

                                <div className='md:w-1/2 w-full flex flex-col justify-between min-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[5][2]}
                                        </p>
                                        <p className='text-sm pb-3 text-justify'>
                                            {texts?.seminar.text5[5][3]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[5][4]}
                                        </p>
                                    </div>

                                    <div>
                                        <p className='font-bold text-sm'>
                                            {texts?.seminar.text5[5][5]}
                                        </p>
                                        <p className='text-sm pb-3'>
                                            {texts?.seminar.text5[5][6]}
                                        </p>
                                    </div>

                                </div>

                                <div className='md:w-1/2 w-full flex flex-col justify-start min-h-full'>
                                    <div>
                                        <p className='font-bold text-base pb-4'>
                                            {texts?.seminar.text5[5][7]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[5][8]}
                                        </p>
                                        <p className='text-sm pb-5 text-justify'>
                                            {texts?.seminar.text5[5][9]}
                                        </p>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </TabPanel>
                </Tabs>

            </section>

            <div className='px-[6%]'>
                <div className='rounded-3xl bg-four-4 border-4 border-six-1 p-12 gap-7'>
                    <p className='w-full text-center sm:text-2xl text-xl text-six-1 pb-9 font-bold'>{texts?.seminar.text6[0]}</p>
                    <div className='w-full flex md:flex-row flex-col gap-7'>
                        <div className='md:w-1/2 w-full text-two-1'>
                            <p className='text-center text-xl  pb-6 font-bold'>{texts?.seminar.text6[1]}</p>

                            <p className='text-justify text-sm pb-5'>{texts?.seminar.text6[2]}</p>

                            <p className='text-justify text-sm pb-5'>{texts?.seminar.text6[3]}</p>

                            <p className='text-justify text-sm pb-5'>{texts?.seminar.text6[4]}</p>

                            <p className='text-sm pb-1'>{texts?.seminar.text6[5]}</p>
                            <p className='text-sm pb-1'>{texts?.seminar.text6[6]}</p>
                            <p className='text-sm pb-1'>{texts?.seminar.text6[7]}</p>

                        </div>

                        <div className='md:w-1/2 w-full text-two-1'>
                            <p className='text-center text-xl  pb-6 font-bold'>{texts?.seminar.text6[8]}</p>

                            <p className='text-justify text-sm pb-5'>{texts?.seminar.text6[9]}</p>

                            <p className='text-justify text-sm'>{texts?.seminar.text6[10]}</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[6%] p-[8%] relative flex flex-col items-center justify-center bg-white' id="four">
                <img src="/assets/images/seminar/img8.jpg" className='w-full customHeight absolute inset-0 object-cover  opacity-60 brightness-75' style={{ zIndex: 0 }} />

                <p style={{ zIndex: 10 }} className='md:text-2xl text-xl pb-6 text-white font-black'>{language === "ka" ? "კონტაქტი" : "Contact"}</p>

                <div className='flex flex-col gap-7 text-white font-bold md:text-base text-sm' style={{ zIndex: 10 }}>
                    <p className='md:text-lg text-base'>{language === "ka" ? "დამატებითი კითხვების შემთხვევაში, გთხოვთ, დაგვიკავშირდეთ:" : "In case of additional questions, please contact us:"}</p>
                    <p>551 29 02 20</p>
                    <p>568 77 11 01</p>
                    <a href="mailto:parzivalsjugendseminar@gmail.com">parzivalsjugendseminar@gmail.com</a>
                </div>
            </div>

        </>
    )
}