"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "@/style/secondcarasoul.css"
import { useEffect, useRef } from "react";

export default function Carsolsecond() {

  

const listRef = useRef(null);
  useEffect(() => {
    const list:any = listRef.current;
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
      <div className="pb-7 flex justify-center items-center flex-col">
        <div className="leading-8 text-[15px] mt-7 mb-10 text-center text-slate-800 maxm-md:px-[66px] max-md:px-[66px]">
          Trusted by top universities, publishers and academic writers from more
          than 125 countries
        </div>
        <div className="scroll-container">
          <div className="company-list flex " ref={listRef}>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="columbia-university.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="mit.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="asco.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="spine.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="emerald-publishing.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="lse.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="stanford-university.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="harvard-university.svg" alt="" className="" />
            </div>
            <div className="px-5 mx-[10px] shrink-0 company">
              <img src="cornell-university.svg" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      {/* <script>
      document.addEventListener("DOMContentLoaded", (event) => {
        const list = document.querySelector(".company-list");
        const companies = list.innerHTML;
        const numDuplicates = 5; // Adjust based on your initial list size and container width
        for (let i = 0; i < numDuplicates; i++) {
          list.innerHTML += companies;
        }
        // Adjust animation duration based on the final list width
        const totalWidth = list.scrollWidth;
        const viewportWidth = document.documentElement.clientWidth;
        const scrollDuration = (totalWidth / viewportWidth) * 15; // Adjust multiplier to control speed
        list.style.animationDuration = `40s`;
      });
    </script> */}
    </>
  );
}
