import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";
import { Link } from "@inertiajs/inertia-react";

const scrollToServices = (sectionId) => {
    const servicesSection = document.getElementById(sectionId);
    servicesSection.scrollIntoView({ behavior: "smooth" });
};

export default function Topbar() {
    return (
        <>
            <section
                id="Header"
                className="flex flex-col gap-[100px] bg-portto-black relative "
            >
                <div className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] z-10">
                    <Link
                        href={route("front.index")}
                        className="w-[161px] flex shrink-0 h-fit w-fit"
                    >
                        <img src="/images/logos/logo.svg" alt="logo" />
                    </Link>
                    <div className="flex gap-[50px] items-center">
                        <ul className="flex gap-[50px] items-center text-white">
                            <li>
                                <Link
                                    href={route("front.index")}
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#Services" // Menggunakan href dengan id Services
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToServices("Services");
                                    }} // Memanggil fungsi scrollToServices
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Testimonials" // Menggunakan href dengan id Services
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToServices("Testimonials");
                                    }}
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#FAQ" // Menggunakan href dengan id Services
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToServices("FAQ");
                                    }}
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#About" // Menggunakan href dengan id Services
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToServices("About");
                                    }}
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                        <Link href={route("front.book")}>
                            <PrimaryButton type="button" variant="secondary">
                                Hire Me
                            </PrimaryButton>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
