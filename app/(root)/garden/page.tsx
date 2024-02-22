import React from 'react';
import '@/styles.css';
import enText from "@/public/languages/en.json";
import kaText from "@/public/languages/ka.json";
import Link from 'next/link';
import Carousel from "@/components/shared/Carousel";
import { garden } from "@/public/photos/Images";
import { cookies } from 'next/headers';
import { getRelatedProductsByCategory } from '@/lib/actions/product.actions'
import photoCollection from '@/public/photos/photos.json';
import ProjectsNavGarden from '@/components/shared/projectsNav/projectsNavGarden';
import GardenCollection from '@/components/shared/GardenCollection';
import { SearchParamProps } from '@/types';
import { Footer } from '@/components/shared/Footer';

const Garden = async ({ params: { id }, searchParams }: SearchParamProps) => {

    const relatedProducts = await getRelatedProductsByCategory({
        categoryId: '6598145b5a84b2b5d7834d06',
        productId: '6598145b5a84b2b5d7834d06',
        page: searchParams.page as string,
    });

    const photos = photoCollection.garden;

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

                <img src="/assets/images/garden/1.JPG" alt="garden Photo"
                    className="md:absolute relative inset-0 h-full w-full object-cover -z-10 md:p-0 px-2 md:flex hidden" />

                <div className='md:absolute relative lg:w-1/2 md:w-10/12 md:top-16 md:right-12 w-full md:bg-four-1 z-10 shadow-garden text-two-1 rounded-3xl md:p-7 p-2 text-justify text-sm leading-relaxed'>

                    <h1 className='text-start md:text-2xl text-xl pb-3 font-black'>{texts?.garden.text1[0]}</h1>

                    <p className='mb-3'>{texts?.garden.text1[1]}</p>
                    <p>{texts?.garden.text1[2]}</p>

                </div>

                <img src="/assets/images/garden/1.jpg" alt="garden Photo"
                    className="relative h-full w-full object-cover -z-10 p-2 md:hidden flex" />


            </div>

            <div>
                <ProjectsNavGarden />
            </div>

            <div className='md:pt-[6%] px-[6%]' id="one">
                <div className="w-full md:border-4 border-garden-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[40%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <img
                            src="/assets/images/garden/2.jpg" alt="Garden Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.garden.text2[0]}</h1>
                        <p className='mb-4'>{texts?.garden.text2[1]}</p>
                        <p>{texts?.garden.text2[2]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <img
                            src="/assets/images/garden/2.jpg" alt="garden Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='p-[6%]' id="two">
                <div className="w-full md:border-4 border-garden-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[45%] w-full float-left relative top-0 right-0 lg:pe-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <img
                            src="/assets/images/garden/3.png" alt="Garden Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.garden.text3[0]}</h1>
                        <p className='pb-2'>{texts?.garden.text3[1]}</p>
                    </div>

                    <div data-aos="fade-right" className="w-full float-right relative top-0 right-0 py-6 lg:ps-10 md:hidden block">
                        <img
                            src="/assets/images/garden/3.png" alt="garden Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                </div>
            </div>

            <div className='px-[6%]' id='three'>
                <div className="w-full md:border-4 border-garden-1 rounded-3xl md:overflow-hidden md:p-12 md:mb-4 mb-8 md:bg-four-3 transition-all duration-300">

                    <div data-aos="fade-right" className="lg:w-[64%] w-full float-right relative top-0 right-0 lg:ps-10 md:block hidden lg:pb-4 md:pb-8 pb-4">
                        <img
                            src="/assets/images/garden/4.jpg" alt="Garden Photo"
                            className="w-full rounded-3xl"
                        />

                    </div>

                    <div data-aos="fade-right" className="text-two-1 text-sm  md:p-3 p-2 leading-relaxed text-justify">
                        <h1 className='font-semibold md:text-2xl text-xl mb-7 text-start'>{texts?.garden.text4[0]}</h1>
                        <p className='pb-4'>{texts?.garden.text4[1]}</p>
                        <p className='pb-2'>{texts?.garden.text4[2]}</p>
                        <p className='pb-2 font-semibold'>{texts?.garden.text4[3]}</p>
                        <a className="bg-four-3 mt-3 block sm:w-80 text-center px-5 py-3 border-garden-1 border-2 rounded-md text-garden-1 font-semibold" href='https://docs.google.com/forms/d/e/1FAIpQLSepqxjgrsQIFFWV_u8S9aPTqNO18ryOgn15KGSclrfnzEuveQ/viewform?fbclid=IwAR20ZGiMRmFJ4Cx4c2EO3mg28MiltSkgACVqgWWbP6cxiM6sr6R6gyeIhcM'>{language === "ka" ? "იმოხალისევე პარსიფალის ბაღჩაში!" : "Volunteer in Parzival's garden!"}</a>
                    </div>

                    <div data-aos="fade-right" className="w-full py-6 lg:ps-10 md:hidden flex">
                        <img
                            src="/assets/images/garden/4.jpg" alt="Garden Photo"
                            className="w-full rounded-3xl block"
                        />

                    </div>

                </div>
            </div>

            <section className="px-[6%] py-[2%]" id="four">

                <Link className='px-12 pb-6 pt-12 block md:text-3xl text-2xl font-black text-two-1 text-center' href='/shop'>{language === "ka" ? "ჩვენი ნაწარმი 🌱" : "Our Products 🌱"}</Link>

                <hr className={`bg-garden-1 h-[3px] border-0 mb-3`} />

                <div className='flex justify-center flex-wrap'>
                    {texts?.garden.cards.map((card, index) => (
                        <div key={index} className='p-3 md:w-[360px] w-full'>
                            <div className="bg-four-4 p-4 border-2 border-garden-1 rounded-xl md:h-[575px] h-full">
                                <img className='w-full aspect-square object-cover rounded-xl' src={card.img} />
                                <h1 className="py-2 text-lg font-semibold text-gray-600 text-center">{card.title}</h1>
                                <p className='text-justify pb-2 text-[13px] text-gray-600'>{card.text}</p>
                                <p className='text-justify text-[14px] text-garden-1 font-semibold'>{card.textg}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className="px-[6%] pb-4" id="five">
                <h1 className='px-12 pb-6 pt-12 block md:text-3xl text-2xl font-black text-two-1 text-center'>
                    {language === "ka" ? "გალერეა" : "Gallery"}
                </h1>

                <hr className={`bg-garden-1 h-[3px] border-0 mb-8`} />

                <Carousel Images={garden} />
            </section>

            <Footer />

        </>
    )
}

export default Garden;

function getProductById(id: string) {
    throw new Error('Function not implemented.');
}
