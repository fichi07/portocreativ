import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import { Link, Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Index({ auth, testimonial }) {
    const { delete: destroy, put } = useForm();
    return (
        <>
            <Authenticated>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                <div className="bg-gray-100 py-12">
                    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10 flex flex-col">
                            <hr className="my-10" />
                            {testimonial.map((testi) => (
                                <div
                                    className="flex flex-col gap-y-5"
                                    key={testi.id}
                                >
                                    <div className="item-project flex flex-row items-center mb-5 justify-between">
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="flex flex-col gap-y-2 ">
                                                <h3 className="font-bold text-xl">
                                                    {testi.name}
                                                </h3>
                                                <p className="text-sm text-slate-400">
                                                    {testi.role}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-5">
                                            <div className="flex flex-col gap-y-2 ">
                                                <h3 className="font-bold items-center text-xl">
                                                    {testi.rate} Starts
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center w-auto gap-x-2">
                                            <Link
                                                href={route(
                                                    "admin.dashboard.testimony.show",
                                                    testi.id
                                                )}
                                            >
                                                <PrimaryButton
                                                    type="button"
                                                    variant="details"
                                                    className="py-3 px-5 rounded-full"
                                                >
                                                    View Details
                                                </PrimaryButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}