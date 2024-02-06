/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/style/main-carasol.css";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize: "200px" }}
      onClick={onClick}
    >
      <img src="right-arrow.png" height={300} width={300} alt="greater-than" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "1 " }}
      onClick={onClick}
    >
      <img src="left-arrow.png" height={300} width={300} alt="greater-than" />
    </div>
  );
}

export default function Carsolmain() {
  const settings: any = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className=" " >
      <Slider {...settings} style={{ overflow: "hidden"}}>
      <div className="py-12 bg-carasol px-10 flex justify-center  px-4 items-center flex-col h-screen max-md:h-[100%]">
                    <div className="flex justify-between items-start flex-col">
                        <div className="flex mx-auto max-w-[1140px]">
                            <div
                                className="flex flex-col justify-center items-start flex-1 max-lg:justify-center max-lg:items-center"
                            >
                                <h1
                                    className="text-yellow-400 heading-IBM-Plex-Sans text-[35px] font-bold mt-[100px] mb-8  max-md:text-center leading-[55px] max-md:leading-[1]"
                                >
                                    Experience the future <br/>
                                    <span className="text-white">of academic writing</span>
                                </h1>
                                <p
                                    className="text-white leading-8  text-xl font-normal max-md:mr-0 max-lg:text-center"
                                >
                                    Boost your chances of success with real-time, subject-specific
                                    language suggestions that help you write better, faster!
                                </p>
                                <div
                                    className="bg-white rounded-lg mt-10 mb-4 flex justify-center items-center"
                                >
                                    <button
                                        type="button"
                                        className="py-5 rounded-lg px-12 text-blue-600 text-xl font-bold dark-blue-hover shrink-0"
                                    >
                                        Start Writing <span className="font-normal">It's Free</span>
                                    </button>
                                </div>
                                <p className="leading-6 text-white text-[15px]">
                                    Available on MS word and Web
                                </p>
                            </div>

                            <div className="shrink-0 flex-1 max-lg:hidden">
                                <img src="top-banner.gif" alt="" className="max-h-[480px] object-contain"/>
                            </div>
                        </div>

                    </div>
                </div>

                {/*SECTIOM TWO */}
                <div className="py-12 bg-carasol px-10 flex justify-center px-4 items-center flex-col h-screen max-md:h-[100%] ">
                    <div className="flex justify-between items-start flex-col">
                        <div className="flex mx-auto  max-w-[1140px]">
                            <div
                                className="flex flex-col justify-center items-start flex-1 max-lg:justify-center max-lg:items-center"
                            >
                                <h1
                                    className="text-yellow-400 heading-IBM-Plex-Sans mt-[100px] mb-8  text-[35px] font-bold  max-md:text-center leading-[55px] max-md:leading-[1]"
                                >
                                    Take the smart path to <br/>
                                    <span className="text-white">great academic writing</span>
                                </h1>
                                <p
                                    className="text-white IBM-Plex-Sans  leading-8 text-xl font-normal max-md:mr-0 max-lg:text-center"
                                >
                                    Deliver high-quality research articles faster with suggestions to
                                    improve language, grammar and readability as you write
                                </p>
                                <div
                                    className="bg-white rounded-lg mt-10 mb-4 flex justify-center items-center"
                                >
                                    <button
                                        type="button"
                                        className="py-5 IBM-Plex-Sans rounded-lg px-12 text-blue-600 text-xl font-bold dark-blue-hover shrink-0"
                                    >
                                        Install the word Add-In
                                    </button>
                                </div>
                            </div>

                            <div className="shrink-0 flex-1 max-lg:hidden">
                                <img src="WordAddin.png" alt="" className="max-h-[480px] object-contain"/>
                            </div>
                        </div>

                    </div>
                </div>


                {/*SECTION THREE*/}
                <div className="py-12 bg-carasol px-10 flex justify-center px-4 items-center flex-col h-screen max-md:h-[100%]">
                    <div className="flex justify-between items-start flex-col">
                        <div className="flex mx-auto  max-w-[1140px] justify-between items-start">
                            <div
                                className="flex flex-col justify-center items-start flex-1 max-lg:justify-center max-lg:items-center"
                            >
                                <h4 className="text-[17px] heading-IBM-Plex-Sans text-white font-bold leading-[22px] flex gap-[5px] items-center justify-center">Introducing <span><img
                                    src="copilot-icon.svg" alt=""/></span>Copilot</h4>
                                <h1
                                    className="text-yellow-400 heading-IBM-Plex-Sans  mb-8  text-[35px] text-center font-bold  max-md:text-center leading-[55px] max-md:leading-[1]"
                                >
                                    Achieve 2x the writing, <br/>
                                    <span className="text-white">in half the time.</span>
                                </h1>
                                <p
                                    className="text-white IBM-Plex-Sans  leading-8 text-xl font-normal max-md:mr-0 max-lg:text-center"
                                >
                                    Brainstorm ideas, create outlines, rewrite text and get reliable
                                    and original content, every time with Paperpal's generative AI
                                    toolkit
                                </p>
                                <div
                                    className="bg-white rounded-lg mt-10 mb-4 flex justify-center items-center"
                                >
                                    <button
                                        type="button"
                                        className="py-5 px-12 text-blue-600 text-xl font-bold rounded-lg dark-blue-hover shrink-0"
                                    >
                                        Try Copilot Now
                                    </button>
                                </div>
                                <p className="text-[15px] IBM-Plex-Sans  text-white flex justify-between items-center gap-[5px] my-4">
                                    <img src="play-icon.svg" alt=""/><span
                                >Scientists prefer Paperpal Copilot over ChatGPT
                <span className="underline IBM-Plex-Sans ">Here's why</span></span
                                >
                                </p>
                            </div>

                            <div className=" flex-1 max-lg:hidden">
                                <img src="./co-pilot-banner-img (1).webp" alt="" className="max-h-[480px] object-contain"/>
                            </div>
                        </div>

                    </div>
                </div>
      </Slider>
    </div>
  );
}
