"use client";
import React, { useEffect, useRef } from "react";
import "@/style/card-carasol.css";

const CardCarousel = () => {
  const listRef = useRef(null);
  useEffect(() => {
    const list: any = listRef.current;
    if (list) {
      const companies = list.innerHTML;
      const numDuplicates = 5; // Adjust based on your initial list size and container width
      for (let i = 0; i < numDuplicates; i++) {
        list.innerHTML += companies;
      }
      // Adjust animation duration based on the final list width
      const totalWidth = list.scrollWidth;
      const viewportWidth = document.documentElement.clientWidth;
      const scrollDuration = (totalWidth / viewportWidth) * 15; // Adjust multiplier to control speed
      list.style.animationDuration = `10s`;
    }
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <>
      {/* carasoul card start */}
      <section className="py-20 bg-indigo-50">
        <div className="mx-[9%] mb-[74px] flex justify-between gap-10 max-md:flex-wrap max-md:justify-between   ">
          {/* <!-- left  --> */}
          <div className="flex max-w-[631px] font-bold max-md:flex-wrap leading-[48px] text-blue justify-start items-center max-md:justify-center">
            <div className="flex">
              <h2 className="text-2xl md:text-[40px]">500k+ academics</h2>
            <img src="heading-heart.svg" className="mx-2" alt="" />
            </div>
            <span className="text-2xl md:text-[40px]">Paperpal!</span>
          </div>
          {/* <!-- right --> */}
          <div className="flex gap-[14px] items-center max-md:ml-10">
            <div className="shrink-0">
              <img src="rating-img.svg" alt="" />
            </div>
            <div className="">
              <div className="flex gap-[10px] items-center ">
                <h4 className="text-base font-bold">4.6</h4>
                <div className="">
                  <span className=" h-[18px] w-[18px] text-emerald-500 text-lg  cursor-pointer">
                    &#x2606;
                  </span>
                  <span className=" h-[18px] w-[18px] text-emerald-500 text-lg cursor-pointer">
                    &#x2606;
                  </span>
                  <span className=" h-[18px] w-[18px] text-emerald-500 text-lg cursor-pointer">
                    &#x2606;
                  </span>
                  <span className=" h-[18px] w-[18px] text-emerald-500 text-lg cursor-pointer">
                    &#x2606;
                  </span>
                  <span className=" h-[18px] w-[18px] text-emerald-500 text-lg cursor-pointer">
                    &#x2606;
                  </span>
                </div>
              </div>
              <div className="text-base leading-6">
                Rated Excellent on Trustpilot
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-container w-full">
          <div
            className="company-list flex gap-5 justify-center items-start "
            ref={listRef}
          >
            {/* <!-- card start --> */}
            <div className="    p-[30px] bg-white rounded-[20px] shrink-0 max-w-[350px]">
              <p className="md:text-[20px] text-blue leading-[38px] mb-10   ">
                <span className="font-bold bg-yellow leading-[38px]">
                  The best thing about Paperpal Word is that you get edits in
                  real-time ,
                </span>
                and not when you’re done writing your document.
              </p>
              <div className="">
                <h3 className="lg:text-lg text-blue   font-bold mb-[5px]">
                  Salwindi Notulu
                </h3>
                <div className="lg:text-base text-blue font-normal">
                  Consultant, Lecturer and Researcher
                </div>
              </div>
            </div>
            {/* <!-- card end -->
     <!-- card 2 --> */}
            <div className="    p-[30px] bg-white rounded-[20px] shrink-0 max-w-[350px]">
              <p className="md:text-[20px] text-blue leading-[38px] mb-10   ">
                “Its easy to use, helpful in drafts as an academic and,
                <span className="font-bold bg-yellow leading-[38px]">
                  {" "}
                  unlike ChatGPT, it doesn't provide same suggestions everytime.
                </span>
              </p>
              <div className="">
                <h3 className="lg:text-lg text-blue   font-bold mb-[5px]">
                  Arpan A Chakravarty
                </h3>
                <div className="lg:text-base text-blue font-normal">India</div>
              </div>
            </div>
            {/* <!-- card 3 start --> */}
            <div className="    p-[30px] bg-white rounded-[20px] shrink-0 max-w-[350px]">
              <p className="md:text-[20px] text-blue leading-[38px] mb-10   ">
                “Because of Paperpal, my manuscript is
                <span className="font-bold bg-yellow leading-[38px]">
                  {" "}
                  now free of errors, more concise and more readable!
                </span>
              </p>
              <div className="">
                <h3 className="lg:text-lg text-blue   font-bold mb-[5px]">
                  Pedro Rodriques
                </h3>
                <div className="lg:text-base text-blue font-normal">
                  Portugal
                </div>
              </div>
            </div>
            {/* 
     <!-- card 3 end -->

     <!-- card 4 start --> */}
            <div className="    p-[30px] bg-white rounded-[20px] shrink-0 max-w-[350px]">
              <p className="md:text-[20px] text-blue leading-[38px] mb-10   ">
                “It offers suggestions about tenses, and paraphrasing and helps
                re-organize my paragraphs, giving them better language
                structure.
                <span className="font-bold bg-yellow leading-[38px]">
                  {" "}
                  I feel confident about my manuscripts after running them
                  through Paperpal.
                </span>
              </p>
              <div className="">
                <h3 className="lg:text-lg text-blue   font-bold mb-[5px]">
                  Obinna
                </h3>
                <div className="lg:text-base text-blue font-normal">
                  United States
                </div>
              </div>
            </div>

            {/* <!-- card 4 end -->

     <!-- card 5  start --> */}
            <div className="    p-[30px] bg-white rounded-[20px] shrink-0 max-w-[350px]">
              <p className="md:text-[20px] text-blue leading-[38px] mb-10   ">
                <span className="font-bold bg-yellow leading-[38px]">
                  Unlike Grammarly, Paperpal aligns and tailors my sentence
                  structures to the convention of academic writing.
                </span>
                It also helps me to rephrase or simplify unclear sentence
                structures and helps me write with confidence and ease
              </p>
              <div className="">
                <h3 className="lg:text-lg text-blue   font-bold mb-[5px]">
                  Adriana Chieng Chee Jing
                </h3>
                <div className="lg:text-base text-blue font-normal">
                  Malaysia
                </div>
              </div>
            </div>
            {/* <!-- card 5 end --> */}
          </div>
        </div>

        {/* <!-- button start --> */}
        <div className="flex justify-center items-center">
          <div className="bg-blue-600 rounded-lg mt-[60px] inline-block">
            <button type="button" className="py-4 px-8">
              <b className="text-lg text-white font-bold">Try Paperpal</b>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardCarousel;
