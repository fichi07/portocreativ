import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        cover: "",
        about: "",
    });
    const ohandleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type == "file"
                ? event.target.files[0]
                : event.target.value
        );
    };
    const options = [
        { value: "Website Development", label: "Website Development" },
        { value: "UI/UX", label: "UI/UX" },
        { value: "Mobile Development", label: "Mobile Development" },
    ];
    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.project.store"));
    };
    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                <div className="bg-gray-100 py-12">
                    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm rounded-2xl p-28">
                            <form
                                action=""
                                className="flex flex-col gap-y-5 item-center"
                                onSubmit={submit}
                            >
                                <h1 className="text-indigo-950 text-3xl font-bold ">
                                    Add New Project
                                </h1>{" "}
                                <label className="flex flex-col gap-y-2 font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Name
                                    </span>
                                    <TextInput
                                        type="text"
                                        name="name"
                                        placeholder="Write name"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                    ></TextInput>
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
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
                                    <span className="text-black font-bold text-lg">
                                        Category
                                    </span>
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
                                    <InputError
                                        message={errors.category}
                                        className="mt-2"
                                    />

                                    {/*   <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-white rounded-full p-[14px_30px] appearance-none outline-none focus:ring-[3px] focus:ring-portto-green placeholder:font-normal placeholder:text-base placeholder:text-[#878C9C]"
                                placeholder="What’s your email address"
                                required
                            /> */}
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Cover
                                    </span>
                                    <TextInput
                                        type="file"
                                        name="cover"
                                        placeholder="Input Your Cover"
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
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        About
                                    </span>
                                    <TextInput
                                        type="textarea"
                                        name="about"
                                        placeholder="About your a whole project"
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
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                    className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
                                >
                                    Upload Project
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
