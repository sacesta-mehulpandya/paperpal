"use client";
import React from "react";
import "@/style/top-accordion.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const TopAccordion = () => {
  return (
    <>
      <section className="px-24 pt-24 max-md:px-4 max-md:py-5 top-accordion"> 
        {/* <!-- up part start--> */}
        <div className="text-center text-[22px] md:text-[38px]  max-md:px-5">
          <h2 className="text-blue-600 font-bold">High-quality academic</h2>
          <h3 className="text-blue-600 font-bold  max-md:mx-5">
            manuscripts
            <span className="text-blue-600 font-bold text-slate-800 border-l-4 pl-4 border-yellow-400">
              in minutes
            </span>
          </h3>
          <p className="text-slate-800 font-normal text-[25px] max-md:text-lg leading-7 py-14 max-md:px-5 max-md:py-5">
            Reduce the risk of desk rejections with instant, in-depth
            <br />
            suggestions to help you polish your academic writing.
          </p>
        </div>
        {/* <!-- up part end--> */}
        {/* 
      <!-- down part start --> */}
        <div className="mt-12 flex flex-col justify-center items-start lg:max-w-[960px] mx-auto md:max-w-[720px] sm:max-w-[540px]">
          {/* <!-- left start --> */}
          <ul className="flex justify-center change-p relative items-start flex-col lg:max-w-[960px]  md:max-w-[720px] sm:max-w-[540px]">
            <Accordion>
              {/* 1 accordion */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <li className="xl:max-w[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
                      <h4 className="gray-txt text-xl leading-8 font-bold  text heading-IBM-Plex-Sans">
                        Simplest way to improve your writing
                      </h4>
                    </li>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex max-lg:flex-col pl-3">
                    <div className="flex-1">
                      <p className="lg:text-2xl md:text-xl text-slate-800 pr-10 max-md:text-xl pb-4  flex-1   max-md:w-[100%]">
                        Our AI algorithm ‘understands’ context, identifies
                        complex writing errors, and suggests improvements to
                        help you polish your manuscript in minutes.
                      </p>
                    </div>
                    <div className="lg:w-[42%] relative top-[0] right-[5px]  max-lg:w-[100%]">
                      <img
                        src="https://paperpal.com/static/screen-shot2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              {/* 2nd sccordion */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <li className="xl:max-w[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
                      <h4 className="gray-txt text-xl leading-8 font-bold text heading-IBM-Plex-Sans">
                        Human precision at machine speed
                      </h4>
                    </li>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex max-lg:flex-col   pl-3">
                    <div className="flex-1">
                      <p className="lg:text-2xl md:text-xl text-slate-800 pr-10  max-md:text-xl   max-md:w-[100%] pb-4">
                        Based on 20+ years of expertise helping researchers get
                        published and the work of academic editors, our AI
                        technology provides instant editing that meet human
                        standards.
                      </p>
                    </div>
                    <div className="relative relative top-[0] right-[5px] w-[42%] accordion-main max-lg:w-[100%]">
                      <img
                        src="https://paperpal.com/static/screen-shot2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              {/* 3rd accordion  */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <li className="xl:max-w[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
                      <h4 className="gray-txt text-xl leading-8 font-bold  heading-IBM-Plex-Sans">
                      Supports over 1,300 subject areas
                      </h4>
                    </li>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex max-lg:flex-col pl-3">
                    <div className="flex-1">
                      <p className="lg:text-2xl max-md:text-xl text-slate-800 pr-10 pb-4 flex-1   max-md:w-[100%]">
                        Our continually evolving AI engine ‘learns’ from
                        millions of pre- and post-edited research papers to
                        offer precise suggestions relevant to your academic
                        field.
                      </p>
                    </div>
                    <div className=" relative top-[0px] right-[5px] w-[42%] max-lg:w-[100%]">
                      <img
                        src="https://paperpal.com/static/screen-shot2.png"
                        alt=""
                        className="flex-1"
                      />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </ul>
          {/* <!-- left end --> */}
        </div>

        {/* <!-- down part end --> */}
      </section>
    </>
  );
};

export default TopAccordion;
