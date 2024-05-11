import Authenticated from "@/Layouts/Template/Index";
import Topbar from "@/Layouts/Template/Topbar";
import Faq from "@/Components/Faq";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import Footer from "@/Components/Footer";

export default function Detail() {
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
                <Topbar></Topbar>
                <section className="flex flex-col gap-[100px] bg-portto-black relative max-h-[665px] mb-[493px]">
                    <div className="hero container max-w-[1130px] pt-[100px] mx-auto flex flex-col justify-center items-center relative">
                        <h1 className="font-extrabold text-[50px] leading-[70px] text-white text-center z-10">
                            AI Finance Insurance
                        </h1>
                        <p className="text-xl leading-[30px] text-white z-10">
                            Website Development
                        </p>
                        <div className="flex shrink-0 w-full h-[800px] rounded-[50px] overflow-hidden bg-white mt-[70px] z-10">
                            <img
                                src="images/thumbnails/details-thumbnail.png"
                                className="w-full h-full object-cover"
                                alt="thumbnail"
                            />
                        </div>
                        <img
                            src="images/Ellipse.svg"
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
                                <p>
                                    FinanceAI is a cutting-edge mobile
                                    application revolutionizing personal finance
                                    management through artificial intelligence.
                                    This intuitive app is engineered to empower
                                    users with real-time financial insights and
                                    personalized.
                                </p>
                                <p>
                                    At the heart of FinanceAI lies a
                                    sophisticated AI engine that analyzes
                                    spending patterns, investment choices, and
                                    saving habits to offer tailored
                                    recommendations. Whether it's optimizing
                                    budgets, identifying investment
                                    opportunities, or potential savings,
                                    FinanceAI ensures users are always a step
                                    ahead in their financial.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="images/icons/crown-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Startup</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="images/icons/code-black.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="font-semibold">Future AI</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]">
                                    <div className="w-5 h-5 flex shrink-0">
                                        <img
                                            src="images/icons/chart-2-black.svg"
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
                                <div className="card-software w-full flex items-center bg-[#F4F5F8] rounded-2xl p-5 gap-4 transition-all duration-300 hover:ring-2 hover:ring-portto-purple">
                                    <div className="w-[70px] h-[70px] bg-white rounded-full flex shrink-0 items-center justify-center">
                                        <img
                                            src="images/logos/react.svg"
                                            alt="tool"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="tool-title font-bold text-xl leading-[30px]">
                                            React JS
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            Web Framework
                                        </p>
                                    </div>
                                </div>
                                <div className="card-software w-full flex items-center bg-[#F4F5F8] rounded-2xl p-5 gap-4 transition-all duration-300 hover:ring-2 hover:ring-portto-purple">
                                    <div className="w-[70px] h-[70px] bg-white rounded-full flex shrink-0 items-center justify-center">
                                        <img
                                            src="images/logos/blender.svg"
                                            alt="tool"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="tool-title font-bold text-xl leading-[30px]">
                                            Blender 3D
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            Product Modeling
                                        </p>
                                    </div>
                                </div>
                                <div className="card-software w-full flex items-center bg-[#F4F5F8] rounded-2xl p-5 gap-4 transition-all duration-300 hover:ring-2 hover:ring-portto-purple">
                                    <div className="w-[70px] h-[70px] bg-white rounded-full flex shrink-0 items-center justify-center">
                                        <img
                                            src="images/logos/figma.svg"
                                            alt="tool"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="tool-title font-bold text-xl leading-[30px]">
                                            Figma
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            UI/UX Design
                                        </p>
                                    </div>
                                </div>
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
                            <a
                                href="images/thumbnails/thumbnail1.png"
                                className="group w-full h-[190px] flex overflow-hidden rounded-[30px] ring-1 ring-[#E4E5E8] transition-all duration-300 hover:ring-[3px] hover:ring-portto-purple relative"
                                data-fancybox="gallery"
                                data-caption="Screenshot #1"
                            >
                                <img
                                    src="images/thumbnails/thumbnail1.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                                <img
                                    src="images/icons/eye.svg"
                                    className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                                    alt="icon eye"
                                />
                            </a>
                            <a
                                href="images/thumbnails/thumbnail2.png"
                                className="group w-full h-[190px] flex overflow-hidden rounded-[30px] ring-1 ring-[#E4E5E8] transition-all duration-300 hover:ring-[3px] hover:ring-portto-purple relative"
                                data-fancybox="gallery"
                                data-caption="Screenshot #1"
                            >
                                <img
                                    src="images/thumbnails/thumbnail2.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                                <img
                                    src="images/icons/eye.svg"
                                    className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                                    alt="icon eye"
                                />
                            </a>
                            <a
                                href="images/thumbnails/thumbnail3.png"
                                className="group w-full h-[190px] flex overflow-hidden rounded-[30px] ring-1 ring-[#E4E5E8] transition-all duration-300 hover:ring-[3px] hover:ring-portto-purple relative"
                                data-fancybox="gallery"
                                data-caption="Screenshot #1"
                            >
                                <img
                                    src="images/thumbnails/thumbnail3.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                                <img
                                    src="images/icons/eye.svg"
                                    className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                                    alt="icon eye"
                                />
                            </a>
                            <a
                                href="images/thumbnails/thumbnail1.png"
                                className="group w-full h-[190px] flex overflow-hidden rounded-[30px] ring-1 ring-[#E4E5E8] transition-all duration-300 hover:ring-[3px] hover:ring-portto-purple relative"
                                data-fancybox="gallery"
                                data-caption="Screenshot #1"
                            >
                                <img
                                    src="images/thumbnails/thumbnail1.png"
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                                <img
                                    src="images/icons/eye.svg"
                                    className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100  transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                                    alt="icon eye"
                                />
                            </a>
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
                                    src="images/photo/photo5.png"
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
                                src="images/icons/quote.svg"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[21px] top-[14px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[50px]">
                            <div className="flex shrink-0">
                                <img
                                    src="images/logos/logo-testi5.svg"
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
                                    src="images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                                <img
                                    src="images/icons/Star.svg"
                                    className="w-full h-full"
                                    alt="star"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Book" className="container max-w-[1130px] mx-auto">
                    <div className="bg-portto-black flex justify-between px-[50px] rounded-[50px] h-[476px] mt-[100px] bg-[url('images/Ellipse.svg')] bg-center bg-no-repeat bg-contain bg-[length:400px_400px] relative">
                        <div className="group/projects w-[220px] overflow-hidden">
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail1.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail2.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail3.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail1.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail2.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail3.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
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
                            <a
                                href="book.html"
                                className="bg-portto-light-gold font-bold text-lg p-[14px_30px] rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                            >
                                Book a Meeting
                            </a>
                        </div>
                        <div className="group/projects w-[220px] overflow-hidden">
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToB_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail1.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail2.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail3.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider flex flex-col h-max justify-center">
                                <div className="project-container animate-[slideToB_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail1.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail2.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                                        <div className="w-full h-full rounded-[20px] overflow-hidden">
                                            <img
                                                src="images/thumbnails/thumbnail3.png"
                                                className="w-full h-full object-cover"
                                                alt="thumbnail"
                                            />
                                        </div>
                                    </div>
                                </div>
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
