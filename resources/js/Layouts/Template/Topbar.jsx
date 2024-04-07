import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";

export default function Topbar() {
    return (
        <>
            <section
                id="Header"
                className="flex flex-col gap-[100px] bg-portto-black relative "
            >
                <div className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] z-10">
                    <a
                        href="index.html"
                        className="w-[161px] flex shrink-0 h-fit w-fit"
                    >
                        <img src=" images/logos/logo.svg" alt="logo" />
                    </a>
                    <div className="flex gap-[50px] items-center">
                        <ul className="flex gap-[50px] items-center text-white">
                            <li>
                                <a
                                    href="index.html"
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                        <PrimaryButton type="button" variant="secondary">
                            Hire Me
                        </PrimaryButton>
                    </div>
                </div>
            </section>
        </>
    );
}
