import Authenticated from "@/Layouts/Template/Index";
import Topbar from "@/Layouts/Template/Topbar";
import Faq from "@/Components/Faq";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import Footer from "@/Components/Footer";

export default function Detail({ projects, assignedTools, screenshots }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js";
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            const initializeFancybox = () => {
                Fancybox.bind("[data-fancybox]", {
                    // Your custom options
                });
            };
            initializeFancybox();
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <Authenticated>
                <Head title="Details Portofolio">
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
                    />
                </Head>
                <Topbar />
                <section className="flex flex-col gap-[100px] bg-portto-black relative max-h-[665px] mb-[493px]">
                    <div className="hero container max-w-[1130px] pt-[100px] mx-auto flex flex-col justify-center items-center relative">
                        <h1 className="font-extrabold text-[50px] leading-[70px] text-white text-center z-10">
                            {projects.name}
                        </h1>
                        <p className="text-xl leading-[30px] text-white z-10">
                            {projects.category}
                        </p>
                        <div className="flex shrink-0 w-full h-[800px] rounded-[50px] overflow-hidden bg-white mt-[70px] z-10">
                            <img
                                src={`/storage/${projects.cover}`}
                                className="w-full h-full object-cover"
                                alt="thumbnail"
                            />
                        </div>
                        <img
                            src="/images/Ellipse.svg"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[135px] w-[35%]"
                            alt="background icon"
                        />
                    </div>
                </section>

                <section
                    id="Details"
                    className="container max-w-[1130px] mx-auto pt-[50px]"
                >
                    <div className="flex gap-[50px] justify-between">
                        <div className="flex flex-col gap-5">
                            <h2 className="font-extrabold text-2xl">
                                The First Purpose
                            </h2>
                            <div className="description flex flex-col gap-4 font-medium text-lg leading-[38px]">
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: projects.about,
                                    }}
                                ></p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="/images/icons/crown-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Startup</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="/images/icons/code-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Future AI</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="/images/icons/chart-2-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Finance</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="font-extrabold text-2xl">
                                Software Used
                            </h2>
                            <div className="software-container flex flex-col shrink-0 gap-5 w-[325px]">
                                {assignedTools.map((projecttool) => (
                                    <div
                                        key={projecttool.id}
                                        className="card-software w-full flex items-center bg-[#F4F5F8] rounded-2xl p-5 gap-4 transition-all duration-300 hover:ring-2 hover:ring-portto-purple"
                                    >
                                        <div className="w-[70px] h-[70px] bg-white rounded-full flex shrink-0 items-center justify-center">
                                            <img
                                                src={`/storage/${projecttool.logo}`}
                                                alt="tool"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[2px]">
                                            <p className="tool-title font-bold text-xl leading-[30px]">
                                                {projecttool.name}
                                            </p>
                                            <p className="text-lg text-[#878C9C]">
                                                {projecttool.tagline}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="Screenshots"
                    className="container max-w-[1130px] mx-auto pt-[50px]"
                >
                    <div className="flex flex-col gap-5">
                        <h2 className="font-extrabold text-2xl">Screenshots</h2>
                        <div className="grid grid-cols-4 gap-5">
                            {screenshots.map((screenshot) => (
                                <a
                                    key={screenshot.id}
                                    href={`/storage/${screenshot.screenshot}`}
                                    className="group w-full h-[190px] flex overflow-hidden rounded-[30px] ring-1 ring-[#E4E5E8] transition-all duration-300 hover:ring-[3px] hover:ring-portto-purple relative"
                                    data-fancybox="gallery"
                                    data-caption="Screenshot #1"
                                >
                                    <img
                                        src={`/storage/${screenshot.screenshot}`}
                                        className="w-full h-full object-cover"
                                        alt="thumbnail"
                                    />
                                    <img
                                        src="/images/icons/eye.svg"
                                        className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                                        alt="icon eye"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    id="Featured-testimonial"
                    className="container max-w-[1130px] mx-auto"
                >
                    <div className="flex gap-[100px] items-center px-[65px] pt-[100px]">
                        <div className="flex flex-col gap-5 relative">
                            <div className="flex w-[200px] h-[250px] rounded-[30px] shrink-0 overflow-hidden z-10">
                                <img
                                    src="/images/photo/photo5.png"
                                    alt="photo"
                                />
                            </div>
                            <div className="flex flex-col gap-[6px] text-center">
                                <p className="font-bold text-2xl">
                                    Shirley Pop
                                </p>
                                <p className="text-xl text-[#878C9C]">
                                    Founder Bwalajar
                                </p>
                            </div>
                            <img
                                src="/images/icons/quote.svg"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[21px] top-[14px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex shrink-0">
                                <img
                                    src="/images/logos/logo-testi5.svg"
                                    alt="logo"
                                />
                            </div>
                            <p className="font-semibold text-[32px] leading-[60px]">
                                She helped us to build our first prototype to
                                win our investor and early users heart that
                                generate huge attraction. Will hire her back
                                again anytime soon.
                            </p>
                            <div className="flex h-8 w-fit shrink-0">
                                <img
                                    src="/images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="/images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="/images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="/images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="/images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Book" className="container max-w-[1130px] mx-auto">
                    <div className="bg-portto-black flex justify-between px-[50px] rounded-[50px] h-[476px] mt-[100px] bg-[url('/images/Ellipse.svg')] bg-center bg-no-repeat bg-contain bg-[length:400px_400px] relative">
                        <div className="group/projects w-[220px] overflow-hidden">
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center text-center w-fit">
                            <h2 className="font-extrabold text-[40px] leading-[60px] text-white">
                                Let Me Help You <br />
                                Grow Business Today
                            </h2>
                            <p className="font-semibold text-lg leading-[32px] text-white">
                                I will dedicate my entire career to focus <br />
                                on finishing your future dreams
                            </p>
                            <Link
                                href={route("front.book")}
                                className="bg-portto-light-gold font-bold text-lg p-[14px_30px] rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                            >
                                Book a Meeting
                            </Link>
                        </div>
                        <div className="group/projects w-[220px] overflow-hidden">
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToB_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToB_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    {screenshots.map((screensho) => (
                                        <div
                                            key={screensho.id}
                                            className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                        >
                                            <div className="w-full h-full rounded-[20px] overflow-hidden">
                                                <img
                                                    src={`/storage/${screensho.screenshot}`}
                                                    className="w-full h-full object-cover"
                                                    alt="thumbnail"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="Projects"
                    className="w-full flex flex-col py-[100px]"
                    style={{
                        backgroundImage: `url('/images/background/background1.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="flex flex-col gap-[10px] mb-[50px]">
                        <h2 className="font-extrabold text-[50px] leading-[70px] text-white text-center">
                            Great Projects
                        </h2>
                        <p className="text-lg text-center text-white">
                            Working with awesome team from around the world
                        </p>
                    </div>
                    <div className="projects w-full flex flex-col mb-[30px] overflow-hidden">
                        <div className="group/slider slider flex flex-nowrap w-max items-center">
                            <div className="project-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
                                {screenshots.map((screensho) => (
                                    <div
                                        key={screensho.id}
                                        className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                    >
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src={`/storage/${screensho.screenshot}`}
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="project-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap ">
                                {screenshots.map((screensho) => (
                                    <div
                                        key={screensho.id}
                                        className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                    >
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src={`/storage/${screensho.screenshot}`}
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="projects w-full flex flex-col overflow-hidden">
                        <div className="group/slider slider flex flex-nowrap w-max items-center">
                            <div className="project-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
                                {screenshots.map((screensho) => (
                                    <div
                                        key={screensho.id}
                                        className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                    >
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src={`/storage/${screensho.screenshot}`}
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="project-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap ">
                                {screenshots.map((screensho) => (
                                    <div
                                        key={screensho.id}
                                        className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur"
                                    >
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src={`/storage/${screensho.screenshot}`}
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Faq></Faq>
                <Footer></Footer>
            </Authenticated>
        </>
    );
}
