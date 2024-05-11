import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Faq from "@/Components/Faq";
import Authenticated from "@/Layouts/Template/Index";
import ServiceCard from "@/Components/ServiceCard";
import Footer from "@/Components/Footer";
import Topbar from "@/Layouts/Template/Topbar";
import React from "react";
export default function Index() {
    return (
        <>
            <Authenticated>
                <Head title="Creativ Porto"></Head>
                <Topbar></Topbar>
                <section className="flex flex-col gap-[100px] bg-portto-black relative">
                    {/* Introduction */}
                    <div className="hero container max-w-[1130px] pt-[100px] mx-auto flex justify-between items-center relative">
                        <div className="flex flex-col gap-[50px] h-fit w-fit text-white z-10">
                            <p className="font-semibold text-2xl">
                                I’m Shayna 👋
                            </p>
                            <h1 className="font-extrabold text-[80px] leading-[90px]">
                                Professional Designer & Dev
                            </h1>
                            <PrimaryButton type="button" variant="primary">
                                Explore Now
                            </PrimaryButton>
                        </div>
                        <div className="flex max-w-[471px] max-h-[567px] z-10">
                            <img
                                src=" images/hero-image.png"
                                className="w-full h-full object-contain"
                                alt="hero image"
                            />
                        </div>
                        <img
                            src=" images/Ellipse.svg"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                            alt="background icon"
                        />
                    </div>
                    {/* Logo */}
                    <div className="company-logos w-full overflow-hidden pb-[190px]">
                        <div className="group/slider flex flex-nowrap w-max items-center">
                            <div className="logo-container animate-[slide_25s_linear_infinite] group-hover/slider:pause-animate  flex gap-[70px] pl-[70px] items-center flex-nowrap">
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum1.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum2.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum3.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum4.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum1.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum2.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum3.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum4.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                            <div className="logo-container animate-[slide_25s_linear_infinite] group-hover/slider:pause-animate  flex gap-[70px] pl-[70px] items-center flex-nowrap ">
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum1.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum2.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum3.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum4.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum1.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum2.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum3.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                                <div className="flex w-fit h-[40px] shrink-0">
                                    <img
                                        src=" images/logos/logoipsum4.png"
                                        className="w-full h-full object-contain"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats container max-w-[1130px] mx-auto bg-gradient-to-r from-[#FFEDD3] to-[#FFCD83] flex justify-between items-center px-[100px] rounded-[30px] w-full h-[180px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2">
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                $230M
                            </p>
                            <p className="font-semibold text-lg">Valuation</p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                31,934
                            </p>
                            <p className="font-semibold text-lg">Projects</p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                245
                            </p>

                            <p className="font-semibold text-lg">Successful</p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                562
                            </p>
                            <p className="font-semibold text-lg">Companies</p>
                        </div>
                    </div>
                </section>

                {/* Service */}
                <section
                    id="Services"
                    className="container max-w-[1130px] mx-auto pt-[190px] pb-[30px]"
                >
                    <div className="flex flex-col gap-[50px]">
                        <div className="flex justify-between items-center">
                            <h2 className="font-extrabold text-[50px] leading-[70px]">
                                Actually, I Do Design <br />& Code for Living
                            </h2>
                            <Link href="">
                                <PrimaryButton type="button" variant="black">
                                    <span>All Services</span>
                                </PrimaryButton>
                            </Link>
                        </div>
                        {/* Service Card */}
                        <div className="grid grid-cols-2 gap-[30px]">
                            <ServiceCard></ServiceCard>
                        </div>
                    </div>
                </section>
                {/* Project */}
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
                        <h2 className="font-extrabold text-[50px] leading-[70px] text-center">
                            Great Projects
                        </h2>
                        <p className="text-lg text-center">
                            Working with awesome team from around the world
                        </p>
                    </div>
                    <div className="projects w-full flex flex-col mb-[30px] overflow-hidden">
                        <div className="group/slider slider flex flex-nowrap w-max items-center">
                            <div className="project-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail1.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail2.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail3.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project-container animate-[slide_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap ">
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail1.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail2.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail3.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects w-full flex flex-col overflow-hidden">
                        <div className="group/slider slider flex flex-nowrap w-max items-center">
                            <div className="project-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap">
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail1.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail2.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail3.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="project-container animate-[slideToR_50s_linear_infinite] group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap ">
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail1.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail2.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                                <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                                    <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                                        <img
                                            src=" images/thumbnails/thumbnail3.png"
                                            className="w-full h-full object-cover"
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                                        <div className="text-center z-10">
                                            <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                                                AI Finance SaaS <br />
                                                Website Integrations
                                            </p>
                                            <p className="text-lg text-[#BABABC]">
                                                Website Development
                                            </p>
                                        </div>
                                        <a
                                            href="details.html"
                                            className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                                        >
                                            View Details
                                        </a>
                                        <img
                                            src=" images/Ellipse.svg"
                                            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                                            alt="background icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WorkFlow */}
                <section
                    id="Workflow"
                    className="container max-w-[1130px] mx-auto pt-[100px] pb-[200px] relative"
                >
                    <div className="flex flex-col gap-[50px] justify-center">
                        <h2 className="font-extrabold text-[50px] leading-[70px] text-center">
                            My Workflow Suitable <br />
                            For Any Project
                        </h2>
                        <div className="flex justify-between items-center">
                            <div className="w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
                                <div className="flex-none">
                                    <img
                                        src=" images/icons/messages-notif.svg"
                                        alt="icon"
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px] text-center">
                                    <p className="font-extrabold text-[22px] leading-[33px]">
                                        Research & Validate
                                    </p>
                                    <p className="text-lg leading-[34px]">
                                        Ensuring all requirements were matching
                                        with market conditions
                                    </p>
                                </div>
                            </div>
                            <div className="w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
                                <div className="flex-none">
                                    <img
                                        src=" images/icons/programming-notif.svg"
                                        alt="icon"
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px] text-center">
                                    <p className="font-extrabold text-[22px] leading-[33px]">
                                        Building with Teams
                                    </p>
                                    <p className="text-lg leading-[34px]">
                                        Working with agile framework to product
                                        a better results
                                    </p>
                                </div>
                            </div>
                            <div className="w-[350px] flex flex-col shrink-0 gap-[30px] items-center">
                                <div className="flex-none">
                                    <img
                                        src=" images/icons/like-notif.svg"
                                        alt="icon"
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px] text-center">
                                    <p className="font-extrabold text-[22px] leading-[33px]">
                                        Deliver to Clients
                                    </p>
                                    <p className="text-lg leading-[34px]">
                                        We br/ing an instant results to the
                                        clients so that they are happys
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stats container max-w-[1130px] mx-auto bg-gradient-to-r from-[#FFEDD3] to-[#FFCD83] flex justify-between items-center px-[100px] rounded-[30px] w-full h-[180px] absolute transform -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2">
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                $230M
                            </p>
                            <p className="font-semibold text-lg">Valuation</p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                31,934
                            </p>
                            <p className="font-semibold text-lg">Projects</p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                245
                            </p>
                            <p className="font-semibold text-lg">
                                Startups IPO
                            </p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                9/10
                            </p>
                            <p className="font-semibold text-lg">Successful</p>
                        </div>
                        <div className="text-center w-fit h-fit">
                            <p className="font-extrabold text-[40px] leading-[60px]">
                                562
                            </p>
                            <p className="font-semibold text-lg">Companies</p>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section id="Testimonials" className="bg-[#F4F5F8]">
                    <div className="container max-w-[1130px] mx-auto pt-[180px] pb-[100px]">
                        <h2 className="font-extrabold text-[50px] leading-[70px] text-center">
                            I Have Delivered Success <br />
                            For All My Clients
                        </h2>
                        <div className="grid grid-cols-2 gap-[30px] mt-[50px]">
                            <div className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5">
                                <div className="h-[40px] flex shrink-0">
                                    <img
                                        src=" images/logos/logo-testi.svg"
                                        alt="logo"
                                    />
                                </div>
                                <p className="font-semibold text-[22px] leading-[40px]">
                                    “Her working method were truly different
                                    from other freelancers, she has this kind of
                                    mindset that can create user-center product
                                    and user loved it”
                                </p>
                                <div className="flex h-8">
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-[70px] h-[70px] shrink-0">
                                        <img
                                            src=" images/photo/photo.png"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-xl leading-[30px]">
                                            Jessi Lyio
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            CPO Agolia Modd
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5">
                                <div className="h-[40px] flex shrink-0">
                                    <img
                                        src=" images/logos/logo-testi2.svg"
                                        alt="logo"
                                    />
                                </div>
                                <p className="font-semibold text-[22px] leading-[40px]">
                                    “She helped us to build our first prototype
                                    to win our investor and early users heart
                                    that generate huge attraction. Will hire her
                                    back again anytime soon”
                                </p>
                                <div className="flex h-8">
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-[70px] h-[70px] shrink-0">
                                        <img
                                            src=" images/photo/photo2.png"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-xl leading-[30px]">
                                            Mariam Sya
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            Founder TinderJobs
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5">
                                <div className="h-[40px] flex shrink-0">
                                    <img
                                        src=" images/logos/logo-testi3.svg"
                                        alt="logo"
                                    />
                                </div>
                                <p className="font-semibold text-[22px] leading-[40px]">
                                    “She helped us to build our first prototype
                                    to win our investor and early users heart
                                    that generate huge attraction. Will hire her
                                    back again anytime soon”
                                </p>
                                <div className="flex h-8">
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-[70px] h-[70px] shrink-0">
                                        <img
                                            src=" images/photo/photo3.png"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-xl leading-[30px]">
                                            John Ceyna
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            Investor at Wokiya
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5">
                                <div className="h-[40px] flex shrink-0">
                                    <img
                                        src=" images/logos/logo-testi4.svg"
                                        alt="logo"
                                    />
                                </div>
                                <p className="font-semibold text-[22px] leading-[40px]">
                                    “Her working method were truly different
                                    from other freelancers, she has this kind of
                                    mindset that can create user-center product
                                    and user loved it”
                                </p>
                                <div className="flex h-8">
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                    <img
                                        src=" images/icons/Star.svg"
                                        alt="star"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-[70px] h-[70px] shrink-0">
                                        <img
                                            src=" images/photo/photo.png"
                                            alt="photo"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-xl leading-[30px]">
                                            Yein Balli
                                        </p>
                                        <p className="text-lg text-[#878C9C]">
                                            CMO Waniwani
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <Faq></Faq>
                <Footer></Footer>
                {/*  Footer */}
            </Authenticated>
        </>
    );
}
