import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import { Link, Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Index({ auth, flashMessage, projects }) {
    const { delete: destroy, put } = useForm();
    return (
        <>
            <Authenticated>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                <div className="bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-10 flex flex-col">
                            <div className="p-6 text-gray-900">
                                <Link
                                    href={route(
                                        "admin.dashboard.project.create"
                                    )}
                                >
                                    <PrimaryButton
                                        type="button"
                                        variant="black"
                                        className="text-white bg-black"
                                    >
                                        Insert New Project
                                    </PrimaryButton>
                                </Link>
                                {flashMessage?.message && (
                                    <FlashMessage
                                        message={flashMessage.message}
                                    />
                                )}
                            </div>
                            <hr className="my-10" />
                            {projects.map((projects) => (
                                <div
                                    className="flex flex-col gap-y-5"
                                    key={projects.id}
                                >
                                    <div className="item-project flex flex-row items-center mb-5 justify-between">
                                        <div className="flex flex-row items-center gap-x-5">
                                            <img
                                                src={`/storage/${projects.cover}`}
                                                alt=""
                                                className="object-cover w-[160px] h-[100px] rounded-2xl"
                                            />
                                            <div className="flex flex-col gap-y-1 ">
                                                <h3 className="font-bold text-xl">
                                                    {projects.name}
                                                </h3>
                                                <p className="text-sm text-slate-400">
                                                    {projects.category}
                                                </p>
                                            </div>
                                        </div>
                                        {!projects.deleted_at && (
                                            <div className="flex flex-row items-end gap-x-2">
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.projecttol.assign.tool",
                                                        projects.id
                                                    )}
                                                >
                                                    <PrimaryButton
                                                        type="button"
                                                        variant="black"
                                                    >
                                                        Add Tools
                                                    </PrimaryButton>
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.projectscreenshot.create",
                                                        projects.id
                                                    )}
                                                >
                                                    <PrimaryButton
                                                        type="button"
                                                        variant="black"
                                                    >
                                                        Add Screenshot
                                                    </PrimaryButton>
                                                </Link>
                                            </div>
                                        )}
                                        <div className="flex flex-row items-center w-auto gap-x-2">
                                            {!projects.deleted_at && (
                                                <Link
                                                    href={route(
                                                        "admin.dashboard.project.edit",
                                                        projects.id
                                                    )}
                                                >
                                                    <PrimaryButton
                                                        type="button"
                                                        variant="update"
                                                        className="py-3 px-5 rounded-full"
                                                    >
                                                        Update
                                                    </PrimaryButton>
                                                </Link>
                                            )}
                                            <div
                                                onClick={() => {
                                                    projects.deleted_at
                                                        ? put(
                                                              route(
                                                                  "admin.dashboard.project.restore",
                                                                  projects.id
                                                              )
                                                          )
                                                        : destroy(
                                                              route(
                                                                  "admin.dashboard.project.destroy",
                                                                  projects.id
                                                              )
                                                          );
                                                }}
                                            >
                                                <PrimaryButton
                                                    type="button"
                                                    variant="delete"
                                                    className="py-3 px-5 rounded-full"
                                                >
                                                    {projects.deleted_at
                                                        ? "Restore"
                                                        : "Delete"}
                                                </PrimaryButton>
                                            </div>
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
