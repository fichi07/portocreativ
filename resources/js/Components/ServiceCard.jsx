import React from "react";
export default function ServiceCard() {
    return (
        <>
            <div className="p-[50px] pb-0 rounded-[30px] flex flex-col gap-[50px] bg-[#F4F5F8]">
                <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-portto-purple">
                    <img
                        src=" images/icons/crown.svg"
                        className="w-10 h-10 object-contain"
                        alt="icon"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-extrabold text-[32px] leading-[48px]">
                        High-Quality Mobile App UI/UX Design
                    </p>
                    <p className="text-lg leading-[34px]">
                        Delivering great experience to users so that they are
                        comfortable while using your product.
                    </p>
                </div>
                <div className="w-full h-[350px]">
                    <img
                        src=" images/services1.png"
                        className="w-full object-contain"
                        alt="image"
                    />
                </div>
            </div>
            <div className="p-[50px] pb-0 rounded-[30px] flex flex-col gap-[50px] bg-[#F4F5F8]">
                <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-portto-green">
                    <img
                        src=" images/icons/code.svg"
                        className="w-10 h-10 object-contain"
                        alt="icon"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-extrabold text-[32px] leading-[48px]">
                        AI Business Dashboard Finance Company
                    </p>
                    <p className="text-lg leading-[34px]">
                        Delivering great experience to users so that they are
                        comfortable while using product.
                    </p>
                </div>
                <div className="w-full h-[350px]">
                    <img
                        src=" images/services2.png"
                        className="w-full object-contain"
                        alt="image"
                    />
                </div>
            </div>
            <div className="col-span-2 p-[50px] pb-0 rounded-[30px] flex gap-[50px] bg-[#F4F5F8]">
                <div className="flex flex-col gap-[50px]">
                    <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-portto-red">
                        <img
                            src=" images/icons/3dcube.svg"
                            className="w-10 h-10 object-contain"
                            alt="icon"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-extrabold text-[32px] leading-[48px]">
                            Robust Plugins Connected Machine Learning
                        </p>
                        <p className="text-lg leading-[34px]">
                            Delivering great experience to users so that they
                            are comfortable while using your product to grow.
                        </p>
                    </div>
                </div>
                <div className="w-[450px] h-[350px] flex shrink-0">
                    <img
                        src=" images/services3.png"
                        className="w-full object-contain"
                        alt="image"
                    />
                </div>
            </div>
        </>
    );
}
