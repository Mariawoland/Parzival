import React from 'react';
import '@/styles.css';
import enText from "@/public/languages/en.json";
import kaText from "@/public/languages/ka.json";
import Link from 'next/link';
import Gallery from '@/components/shared/gallery';
import { cookies } from 'next/headers';
import { getAllProducts } from '@/lib/actions/product.actions'
import photoCollection from '@/public/photos/photos.json';
import ProjectsNavWorkshop from '@/components/shared/projectsNav/projectsNavWorkshop';
import WorkshopCollection from '@/components/shared/WorkshopCollection';
import { SearchParamProps } from '@/types';
import { Footer } from '@/components/shared/Footer';
import Image from "next/image";


const Workshop = async ({ params: { id }, searchParams }: SearchParamProps) => {

    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';


    const allProducts = await getAllProducts({
        query: searchText,
        category,
        page,
        limit: 4,
    });

    const excludedCategoryId = '6598145b5a84b2b5d7834d06';
    const filteredProducts = allProducts?.data?.filter((product: { category: string; }) => product.category !== excludedCategoryId);

    const productsToRender = filteredProducts || [];

    const photos = photoCollection.workshop;

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

            <div className={`relative min-h-[88vh] md:p-0 px-[6%] pt-[6%]`}>

                <Image width={1400} height={700} src="/assets/images/workshop/img1.png" alt="workshop Photo"
                    className="md:absolute relative inset-0 h-full w-full object-cover -z-10 md:p-0 px-2 md:flex hidden" />

                <div className='md:absolute relative lg:w-1/2 md:w-10/12 md:top-16 md:right-12 w-full md:bg-four-1 z-10 shadow-workshop text-two-1 rounded-3xl md:p-7 p-2 text-justify text-sm leading-relaxed'>

                    <h1 className='text-start md:text-2xl text-xl pb-3 font-black'>{texts?.workshop.text1[0]}</h1>

                    <p className='mb-3'>{texts?.workshop.text1[1]}</p>
                    <p>{texts?.workshop.text1[2]}</p>
                    <a href='https://www.instagram.com/madeinparzival_/' className='flex justify-center border-2 font-black transition-all duration-300 tracking-wider border-workshop-1 hover:border-workshop-2 text-workshop-1 hover:text-four-1 bg-four-4 hover:bg-workshop-2 w-full rounded-full mt-4 py-3 text-base' target="_blank">{texts?.workshop.text1[3]}</a>
                </div>

                <Image width={600} height={400} src="/assets/images/workshop/img1.png" alt="workshop Photo"
                    className="relative h-full w-full object-cover -z-10 p-2 md:hidden flex" />


            </div>

            <div>
                <ProjectsNavWorkshop />
            </div>

            <div className='md:pt-[6%] px-[6%]' id="one">
                <div className="w-full md:border-4 border-workshop-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[60%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <Image width={800} height={500}
                            src="/assets/images/workshop/img2.jpg" alt="workshop Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.workshop.text2[0]}</h1>
                        <p className='mb-4'>{texts?.workshop.text2[1]}</p>
                        <p className='mb-4'>{texts?.workshop.text2[2]}</p>
                        <p>{texts?.workshop.text2[3]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <Image width={800} height={500}
                            src="/assets/images/workshop/img2.jpg" alt="workshop Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='p-[6%]' id="two">
                <div className="w-full md:border-4 border-workshop-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[45%] w-full float-left relative top-0 right-0 lg:pe-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <Image width={800} height={500}
                            src="/assets/images/workshop/img3.jpg" alt="workshop Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.workshop.text3[0]}</h1>
                        <p className='mb-4 pb-2'>{texts?.workshop.text3[1]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <Image width={800} height={500}
                            src="/assets/images/workshop/img3.jpg" alt="workshop Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='px-[6%]' id='three'>
                <div className="w-full md:border-4 border-workshop-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[64%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <Image width={800} height={500}
                            src="/assets/images/workshop/img4.jpeg" alt="workshop Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.workshop.text4[0]}</h1>
                        <p className='pb-4'>{texts?.workshop.text4[1]}</p>
                        <p className='pb-2'>{texts?.workshop.text4[2]}</p>
                        <p className='mb-4 pb-2'>{texts?.workshop.text4[3]}</p>
                        <a href='https://www.instagram.com/madeinparzival_/' className='flex justify-center border-2 font-black transition-all duration-300 tracking-wide border-workshop-1 hover:border-workshop-2 text-workshop-1 hover:text-four-1 bg-four-4 hover:bg-workshop-2 py-3 px-5 w-full rounded-full' target='_blank'>{texts?.workshop.text4[4]}</a>
                    </div>

                    <div data-aos="fade-right" className="w-full py-6 lg:ps-10 md:hidden flex">
                        <Image width={800} height={500}
                            src="/assets/images/workshop/img4.jpeg" alt="workshop Photo"
                            className="w-full rounded-3xl block"
                        />

                    </div>

                </div>
            </div>

            <section className="px-[6%] py-[2%]" id="four">

                <Link className='px-12 pb-6 pt-12 block md:text-3xl text-2xl font-black text-two-1' href='/shop'>{language === "ka" ? "ჩვენი ნაწარმი" : "Our Products"}</Link>

                <hr className={`bg-workshop-1 h-[3px] border-0 mb-3`} />

                <div>
                    <WorkshopCollection
                        data={productsToRender}
                        limit={4}
                        page={1}
                        totalPages={1}
                    />
                </div>

            </section>

            <section className="px-[6%] pb-4" id="five">
                <h1 className='px-12 pb-6 pt-12 block md:text-3xl text-2xl font-black text-two-1'>
                    {language === "ka" ? "გალერეა" : "Gallery"}
                </h1>

                <hr className={`bg-workshop-1 h-[3px] border-0 mb-8`} />

                <Gallery photos={photos} />
            </section>

            <Footer />

        </>
    )
}

export default Workshop;

function getProductById(id: string) {
    throw new Error('Function not implemented.');
}
