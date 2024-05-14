import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Inertia } from "@inertiajs/inertia";

export default function Index({ auth, project }) {
    const { setData, data, processing, errors } = useForm({
        ...project,
    });

    const ohandleOnChange = (event) => {
        const selectedFile = event.target.files[0];

        // Periksa ukuran file yang dipilih
        if (selectedFile && selectedFile.size > 2097152) {
            // Jika ukuran file lebih dari 2MB, tampilkan pesan kesalahan
            alert("File size must not exceed 2MB");
            // Kosongkan input file
            event.target.value = null;
        } else {
            // Jika ukuran file valid, tetapkan data ke state
            setData(
                event.target.name,
                event.target.type == "file" ? selectedFile : event.target.value
            );
        }
    };

    const options = [
        { value: "Website Development", label: "Website Development" },
        { value: "UI/UX", label: "UI/UX" },
        { value: "Mobile Development", label: "Mobile Development" },
    ];
    const submit = (e) => {
        e.preventDefault();
        if (data.cover === project.cover) {
            delete data.cover;
        }
        Inertia.post(route("admin.dashboard.project.update", project.id), {
            _method: "PUT",
            ...data,
        });
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
                                        defaultValue={project.name}
                                        handleChange={ohandleOnChange}
                                        isError={errors.name}
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Category
                                    </span>
                                    <select
                                        name="category"
                                        onChange={ohandleOnChange}
                                        defaultValue={project.category}
                                        className="font-semibold text-gray-500 rounded-2xl py-[13px] px-7 w-full appearance-none outline-none placeholder:font-normal placeholder:text-base "
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
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        Cover
                                    </span>
                                    <img
                                        src={`/storage/${project.cover}`}
                                        alt=""
                                        className="w-40"
                                    />
                                    <TextInput
                                        type="file"
                                        name="cover"
                                        placeholder="Input Your Cover"
                                        handleChange={ohandleOnChange}
                                        isError={errors.cover}
                                    />
                                    <InputError
                                        message={errors.cover}
                                        className="mt-2"
                                    />
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-black font-bold text-lg">
                                        About
                                    </span>
                                    <TextInput
                                        type="textarea"
                                        name="about"
                                        placeholder="About your a whole project"
                                        defaultValue={project.about}
                                        handleChange={ohandleOnChange}
                                        rows={5}
                                        isError={errors.about}
                                    />
                                    <InputError
                                        message={errors.about}
                                        className="mt-2"
                                    />
                                </label>
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                    className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
                                >
                                    Save
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
