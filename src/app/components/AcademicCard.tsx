export default function AcademicCard() {
    return (
        <>
            <section
                className="px-24 py-24 max-md:px-5 max-md:py-5 flex flex-col justify-center items-center mt-[100px]"
            >
                <div className="text-center text-[22px] md:text-[38px]">
                    <h2 className="text-blue-600 font-bold">
                        Take your academic writing
                    </h2>
                    <h3 className="text-blue-600 font-bold mx-32 max-md:mx-5">to the next level <span
                        className="text-blue-600 font-bold text-slate-800 border-l-4 pl-4 border-yellow-400"
                    >with Paperpal</span
                    ></h3>

                </div>

                {/*<!-- card wrpper start*/}
                <div
                    className="mt-7 grid grid-cols-3 grid-row-2 max-lg:grid-cols-1 justify-center items-center card-wrapper gap-5 ">
                    {/*<!-- card starr*/}
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://paperpal.com/static/icon1.png" alt=""/>

                        <p
                            className="text-lg text-slate-800 font-semibold leading-6 text-center mx-14 shrink-0 my-6"
                        >
                            Tailored for researchers
                            and academic writing
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://paperpal.com/static/online.png" alt=""/>

                        <p
                            className="text-lg text-slate-800 font-semibold  font-semibold  leading-6 text-center mx-14 shrink-0 my-6"
                        >
                            Extensive English language
                            recommendations
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://paperpal.com/static/icon3.png" alt=""/>

                        <p
                            className="text-lg text-slate-800 font-semibold   leading-6 text-center mx-14 shrink-0 my-6"
                        >
                            Accurate detection of
                            complex grammar errors
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://paperpal.com/static/icon4.png" alt=""/>

                        <p
                            className="text-lg text-slate-800 font-semibold  leading-6 text-center mx-14 shrink-0 my-6"
                        > Suggestions to rephrase
                            confusing sentences

                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://paperpal.com/static/icon5.png" alt=""/>

                        <p
                            className="text-lg text-slate-800 font-semibold  leading-6 text-center mx-14 shrink-0 my-6"
                        >
                            Checks for structural and
                            technical inconsistencies
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src="https://paperpal.com/static/icon6.png" alt=""/>

                        <p
                            className="text-lg text-slate-800 font-semibold  leading-6 text-center mx-14 shrink-0 my-6"
                        >
                            Paperpal is available
                            real-time, where you write
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}