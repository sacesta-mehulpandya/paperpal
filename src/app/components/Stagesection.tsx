export default function Stagesection() {

    return (
        <>
            <section
                className="px-24 py-24 max-md:px-5 max-md:py-5 flex flex-col justify-center items-center"
            >
                <div className="text-center text-[22px] md:text-[38px] ">
                    <h2 className="text-blue-600 font-bold">
                        Paperpal has you covered
                    </h2>

                    <span
                        className="text-blue-600  font-bold text-slate-800 border-l-4 pl-4 border-yellow-400"
                    >at every writing stage</span
                    >
                </div>

                {/*<!-- card wrapper start */}
                <div className="mt-6 flex justify-center items-center max-lg:flex-wrap gap-5">
                    {/*<!-- card starr */}
                    <div className=" flex flex-col justify-center items-center">
                        <img src="https://paperpal.com/static/review.png" alt=""/>
                        <h3 className="text-2xl text-slate-800 font-bold py-6 leading-8 text-center IBM-Plex-Sans">
                            Paperpal for Manuscript
                        </h3>
                        <p className="text-lg text-slate-800 font-normal leading-6 text-center mx-8 shrink-0 IBM-Plex-Sans">
                            Have a ready manuscript that needs review? Full language checks with
                            edits in track changes and multiple free rounds to ensure
                            high-quality writing
                        </p>
                        <div className="bg-blue-600 rounded-lg mt-7 dark-blue-hover">

                            <button type="button" className="py-4 px-5">
                                <b className="text-base text-white font-bold hover:bg-slate-800"
                                >Check Your Menuscript</b
                                >
                            </button>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <img src="https://paperpal.com/static/online.png" alt=""/>
                        <h3 className="text-2xl text-slate-800 font-bold py-6 leading-8 text-center IBM-Plex-Sans">
                            Paperpal for Manuscript
                        </h3>
                        <p className="text-lg text-slate-800 font-normal leading-6 text-center mx-8 shrink-0 IBM-Plex-Sans">
                            Have a ready manuscript that needs review? Full language checks with
                            edits in track changes and multiple free rounds to ensure
                            high-quality writing
                        </p>
                        <div className="bg-blue-600 rounded-lg mt-7 dark-blue-hover">
                            <a href=""
                            >
                                <button type="button" className="py-4 px-5">
                                    <b className="text-base text-white font-bold"
                                    >Check Your Menuscript</b
                                    >
                                </button>
                            </a
                            >
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <img src="https://paperpal.com/static/word-add-in.png" alt=""/>
                        <h3 className="text-2xl text-slate-800 font-bold py-6 leading-8 text-center IBM-Plex-Sans">
                            Paperpal for Manuscript
                        </h3>
                        <p className="text-lg text-slate-800 font-normal leading-6 text-center mx-8 shrink-0 IBM-Plex-Sans">
                            Have a ready manuscript that needs review? Full language checks with
                            edits in track changes and multiple free rounds to ensure
                            high-quality writing
                        </p>
                        <div className="bg-blue-600 rounded-lg mt-7 dark-blue-hover">
                            <a href=""
                            >
                                <button type="button" className="py-4 px-5">
                                    <b className="text-base text-white font-bold"
                                    >Check Your Menuscript</b
                                    >
                                </button>
                            </a
                            >
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
