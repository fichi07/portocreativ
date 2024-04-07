import Authenticated from "@/Layouts/Template/Index";
import TopbarAdmin from "@/Layouts/Template/TopbarAdmin";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
export default function Index({ auth }) {
    return (
        <>
            <Authenticated>
                <Head title="Dashboard Admin"></Head>
                <TopbarAdmin name={auth.user.name} />
                {/* <Link href={route("admin.dashboard.project.index")}>
                    <PrimaryButton
                        type="button"
                        variant="primary"
                        className="text-white top-[80px]"
                    >
                        Insert New Movie
                    </PrimaryButton>
                </Link> */}
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className=" overflow-hidden shadow-sm sm:rounded-lg">
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
                                        Insert New Movie
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
