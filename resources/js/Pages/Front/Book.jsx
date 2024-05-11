import TextInput from "@/Components/TextInput";

import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Authenticated from "@/Layouts/Template/Index";
export default function Book() {
    const { setData, post, processing } = useForm({
        name: "",
        email: "",
        category: "",
        budget: "",
        brief: "",
    });
    const ohandleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type == "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const [selectedOption, setSelectedOption] = useState("");
    const options = [
        { value: "Website Development", label: "Website Development" },
        { value: "UI/UX", label: "UI/UX" },
        { value: "Mobile Development", label: "Mobile Development" },
    ];

    return (
        <>
            <Authenticated>
                <Head title="Book Page"></Head>
                <section
                    id="Content"
                    className="bg-portto-black flex min-h-screen"
                >
                    <div className="w-[660px] min-h-screen flex flex-col p-[30px_40px] justify-end overflow-hidden bg-[url('images/background/side-image.png')] bg-cover bg-center bg-no-repeat">
                        <div className="flex flex-col bg-white p-[30px] gap-5 rounded-[30px] w-[580px]">
                            <div className="flex h-10 items-start overflow-hidden">
                                <img
                                    src="images/logos/logo-testi5.svg"
                                    className="h-full object-contain"
                                    alt="photo"
                                />
                            </div>
                            <p className="font-semibold text-[22px] leading-[40px]">
                                She helped us to build our first prototype to
                                win our investor and early users heart that
                                generate huge attraction.
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
                    <div className="flex flex-col gap-[50px] items-center justify-center mx-auto py-4 bg-[url('images/Ellipse.svg')] bg-center bg-no-repeat bg-contain bg-[length:540px]">
                        <div className="flex flex-col text-center text-white">
                            <h1 className="font-extrabold text-[50px] leading-[75px]">
                                Book a Meeting
                            </h1>
                            <p className="text-lg">
                                Tell me anything about your biggest future
                                dreams
                            </p>
                        </div>
                        <form
                            action=""
                            className="flex flex-col gap-5 w-[550px]"
                        >
                            <label className="flex flex-col gap-[10px] font-semibold">
                                <span className="text-white">
                                    Complete Name
                                </span>
                                <TextInput
                                    type="text"
                                    name="name"
                                    placeholder="What’s your Full Name"
                                    isFocused={true}
                                    handleChange={ohandleOnChange}
                                    required
                                ></TextInput>
                                {/*    <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-white rounded-full p-[14px_30px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green placeholder:font-normal placeholder:text-base placeholder:text-[#878C9C]"
                                placeholder="Write your complete name"
                                required
                            /> */}
                            </label>
                            <label className="flex flex-col gap-[10px] font-semibold">
                                <span className="text-white">
                                    Email Address
                                </span>
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder="What’s your email address"
                                    isFocused={true}
                                    handleChange={ohandleOnChange}
                                    required
                                ></TextInput>
                                {/*   <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-white rounded-full p-[14px_30px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green placeholder:font-normal placeholder:text-base placeholder:text-[#878C9C]"
                                placeholder="What’s your email address"
                                required
                            /> */}
                            </label>
                            <div className="grid grid-cols-2 gap-5">
                                <label className="flex flex-col gap-[10px] font-semibold w-full">
                                    <span className="text-white">Category</span>
                                    <select
                                        name="category"
                                        onChange={ohandleOnChange}
                                        className="font-semibold text-gray-500 rounded-2xl py-[13px] px-7 w-full appearance-none outline-none placeholder:font-normal placeholder:text-base "
                                        required
                                    >
                                        <option value="">Pilih opsi</option>
                                        {options.map((option) => (
                                            <option key={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {/*  <select
                                    name="category"
                                    id="category"
                                    className="font-semibold bg-white rounded-full p-[14px_30px] pr-[54px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green invalid:text-[#878C9C] invalid:font-normal bg-[url(images/icons/arrow-down.svg)] bg-no-repeat bg-[91%]"
                                    required
                                >
                                    <option
                                        value=""
                                        className="text-[#878C9C]"
                                        selected
                                        disabled
                                        hidden
                                    >
                                        Select category
                                    </option>
                                    <option value="">
                                        Website Development
                                    </option>
                                </select> */}
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold w-full">
                                    <span className="text-white">
                                        Est. Budget (USD)
                                    </span>
                                    <TextInput
                                        type="number"
                                        name="budget"
                                        placeholder="Tell me your budget"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                    ></TextInput>
                                    {/*  <input
                                    type="number"
                                    name="budget"
                                    id="email"
                                    className="bg-white rounded-full p-[14px_30px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green placeholder:font-normal placeholder:text-base placeholder:text-[#878C9C]"
                                    placeholder="Tell me your budget"
                                    required
                                /> */}
                                </label>
                            </div>
                            <label className="flex flex-col gap-[10px] font-semibold">
                                <span className="text-white">
                                    Project Brief
                                </span>
                                <TextInput
                                    type="textarea"
                                    name="brief"
                                    placeholder="Brief me your a whole project"
                                    isFocused={true}
                                    handleChange={ohandleOnChange}
                                    required
                                    rows={5}
                                ></TextInput>
                                {/*  <textarea
                                name="brief"
                                id="brief"
                                className="rounded-[20px] p-[14px_30px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green placeholder:font-normal placeholder:text-base placeholder:text-[#878C9C] h-[250px]"
                                placeholder="Brief me your a whole project"
                                required
                            ></textarea> */}
                            </label>
                            <button className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]">
                                Request for Meeting
                            </button>
                        </form>
                    </div>
                </section>
            </Authenticated>
        </>
    );
}
