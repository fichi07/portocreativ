import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Topbar from "@/Layouts/Template/Topbar";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Template/Index";
export default function Testimony({ flashMessage, testimonials }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        role: "",
        rate: "",
        testimony: "",
        logo: "",
    });
    const ohandleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type == "file"
                ? event.target.files[0]
                : event.target.value
        );
    };
    const handleRatingChange = (event) => {
        // Ensure rating input doesn't exceed 5
        const value = parseInt(event.target.value);
        if (value > 5) {
            event.target.value = 5;
            setData("rate", 5);
        } else {
            setData("rate", value);
        }
    };

    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCard(
                (currentCard) => (currentCard + 1) % testimonials.length
            );
        }, 5000); // rotates every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const options = [
        { value: "Website Development", label: "Website Development" },
        { value: "UI/UX", label: "UI/UX" },
        { value: "Mobile Development", label: "Mobile Development" },
    ];
    const submit = (e) => {
        e.preventDefault();

        post(route("front.testimony.store"));
    };
    return (
        <>
            <Authenticated>
                <Head title="Book Page"></Head>
                {/*   {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )} */}
                <Topbar />
                <section
                    id="Content"
                    className="bg-portto-black flex min-h-screen "
                >
                    <div className="w-[660px] min-h-screen mt-[50px] flex flex-col p-[30px_40px] justify-center overflow-hidden ">
                        <div
                            key={currentCard}
                            className="flex mb-[50px] flex-col bg-white p-[30px] gap-5 rounded-[30px] w-[580px]"
                        >
                            <div className="flex h-10 items-center overflow-hidden">
                                <img
                                    src={`/storage/${testimonials[currentCard].logo}`}
                                    className="h-full w-fit object-contain"
                                    alt="logo"
                                />
                                <p className="text-sm items-center text-slate-400">
                                    {testimonials[currentCard].role}
                                </p>
                            </div>

                            <p className="font-semibold text-[22px]  leading-[40px]">
                                {testimonials[currentCard].testimony}
                            </p>
                            <div className="flex h-8 w-fit shrink-0">
                                {Array.from(
                                    { length: testimonials[currentCard].rate },
                                    (_, i) => (
                                        <img
                                            key={i}
                                            src="images/icons/Star.svg"
                                            className="w-full h-full"
                                            alt="star"
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[70px] items-center justify-center mx-auto py-10 bg-[url('images/Ellipse.svg')] bg-center bg-no-repeat bg-contain bg-[length:540px]">
                        <div className="flex flex-col text-center text-white">
                            <h1 className="font-extrabold text-[50px] leading-[75px]">
                                Review Us
                            </h1>
                            <p className="text-lg">
                                Tell me anything about your opinion
                            </p>
                        </div>
                        <form
                            action=""
                            onSubmit={submit}
                            className="flex flex-col gap-5 w-[550px]"
                        >
                            <label className="flex flex-col gap-[10px] font-semibold">
                                <span className="text-white">
                                    Complete Name
                                </span>
                                <TextInput
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    isFocused={true}
                                    handleChange={ohandleOnChange}
                                    required
                                    isError={errors.name}
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </label>
                            <label className="flex flex-col gap-[10px] font-semibold">
                                <span className="text-white">
                                    Role in Company
                                </span>
                                <TextInput
                                    type="text"
                                    name="role"
                                    placeholder="Your Role in Your Company"
                                    isFocused={true}
                                    handleChange={ohandleOnChange}
                                    required
                                    isError={errors.role}
                                />
                                <InputError
                                    message={errors.role}
                                    className="mt-2"
                                />
                            </label>
                            <div className="grid grid-cols-2 gap-5">
                                <label className="flex flex-col gap-[10px] font-semibold">
                                    <span className="text-white">
                                        Your Logo/Photo Profile
                                    </span>
                                    <TextInput
                                        type="file"
                                        name="logo"
                                        placeholder="Input Your Logo"
                                        isFocused={true}
                                        handleChange={ohandleOnChange}
                                        required
                                        isError={errors.logo}
                                    />
                                    <InputError
                                        message={errors.logo}
                                        className="mt-2"
                                    />
                                </label>
                                <label className="flex flex-col gap-[10px] font-semibold w-full">
                                    <span className="text-white">Rating</span>
                                    <input
                                        type="number"
                                        name="rate"
                                        className="rounded-2xl py-[13px] px-7 w-full"
                                        placeholder="Rate from 1 to 5"
                                        onChange={handleRatingChange}
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "ArrowUp" ||
                                                e.key === "ArrowDown"
                                            ) {
                                                e.preventDefault();
                                            }
                                        }}
                                        required
                                        min="1" // Minimum rating is 1
                                        max="5" // Maximum rating is 5
                                    />
                                    <InputError
                                        message={errors.rate}
                                        className="mt-2"
                                    />
                                </label>
                            </div>
                            <label className="flex flex-col gap-[10px] font-semibold">
                                <span className="text-white">Testimony</span>
                                <TextInput
                                    type="textarea"
                                    name="testimony"
                                    placeholder="Write Your Testimony"
                                    isFocused={true}
                                    handleChange={ohandleOnChange}
                                    required
                                    rows={5}
                                    isError={errors.brief}
                                />
                                <InputError
                                    message={errors.brief}
                                    className="mt-2"
                                />
                            </label>
                            <PrimaryButton
                                type="submit"
                                processing={processing}
                                className="font-bold text-lg text-white bg-portto-purple rounded-[20px] p-5 transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
                            >
                                Submit Review
                            </PrimaryButton>
                        </form>
                    </div>
                </section>
                <Footer></Footer>
            </Authenticated>
        </>
    );
}
