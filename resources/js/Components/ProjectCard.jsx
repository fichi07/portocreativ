import React from "react";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/inertia-react";

ProjectCard.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};
export default function ProjectCard({ name, slug, cover, category }) {
    return (
        <>
            <div className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative">
                <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                    <img
                        src={`/storage/${cover}`}
                        className="w-full h-full object-cover"
                        alt="cover"
                    />
                </div>
                <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="text-center z-10">
                        <p className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white">
                            {name}
                            <br />
                        </p>
                        <p className="text-lg text-[#BABABC]">{category}</p>
                    </div>
                    <Link
                        href={route("front.detail", slug)}
                        className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                    >
                        View Details
                    </Link>
                    <img
                        src="images/Ellipse.svg"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                        alt="background icon"
                    />
                </div>
            </div>
        </>
    );
}
