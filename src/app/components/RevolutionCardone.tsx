import "@/style/revolutioncard.css"

export default function RevolutionCardone() {
  return (
    <> 

      <section className="px-24 my-24 max-md:px-5 max-md:py-5 revolution-card ">
        <div className="text-center text-[22px] md:text-[38px] max-md:px-5">
          <h2 className="text-blue-600 font-bold">Be a part of</h2>

          <span className="text-blue-600 font-bold text-slate-800 border-l-4 pl-4 border-yellow-400">
            the new writing revolution
          </span>

          <p className="text-slate-800 font-normal text-[25px] max-md:text-lg leading-7 py-14  max-md:py-5">
            Our powerful AI tools transform your work by giving you the power
            <br />
            to improve your writing. Paperpal is built for all academics. <br />
            Learn more below
          </p>
        </div>

        {/*<!-- card start */}

        <div className="flex justify-center">
          <div className="mt-7 flex  justify-between items-center gap-[70px] max-md:gap-[10px] lg:max-w-[1140px] max-md:flex-col">
            {/* <!-- card starr  */}
            <div className="flex flex-col justify-center items-center flex-1  max-md:px-5 py-5">
              <img src="degree.png" alt="" />

              <span className="text-[25px] text-slate-800 font-semibold leading-6 text-center mx-14 shrink-0 my-6">
                Students
              </span>
              <h4 className="text-xl font-normal right-arrow text-slate-800 flex justify-center items-center cursor-pointer">
                Find out more
             
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center flex-1  max-md:px-5 py-5">
              <img src="hand.png" alt="" />

              <span className="text-[25px] text-slate-800 font-semibold leading-6 text-center mx-14 shrink-0 my-6">
                Researchers
              </span>
              <h4 className="text-xl font-normal right-arrow text-slate-800 flex justify-center items-center cursor-pointer">
                Find out more
               
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center flex-1  max-md:px-5 py-5">
              <img src="book.png" alt="" />

              <span className="text-[25px] text-slate-800 font-semibold leading-6 text-center mx-14 shrink-0 my-6">
                Publishers
              </span>
              <h4 className="text-xl font-normal right-arrow text-slate-800 flex justify-center items-center cursor-pointer">
                Find out more
              
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
