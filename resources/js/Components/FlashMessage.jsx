import React, { useState, useEffect } from "react";

export default function FlashMessage({ className, message = "" }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Set the timeout for 5 seconds

        return () => clearTimeout(timer); // Clean up the timer when the component unmounts or updates
    }, []); // Empty dependency array to run only once after the initial render

    if (!isVisible) return null; // Don't render anything if not visible

    return (
        <div
            className={`flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700 ${className}`}
        >
            {message}
        </div>
    );
}
