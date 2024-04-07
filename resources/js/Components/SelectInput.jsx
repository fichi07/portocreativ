import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

SelectInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    isFocused: PropTypes.bool,
    required: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
    isError: PropTypes.bool,
};

export default function SelectInput({
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    required,
    isFocused,
    handleChange,
    placeholder,
    options,
    isError,
}) {
    const selectRef = useRef();

    useEffect(() => {
        if (isFocused) {
            selectRef.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl py-[13px] px-7 w-full appearance-none outline-none placeholder:font-normal placeholder:text-base ${
                    isError ? "input-error" : ""
                } input-${variant} ${className}`}
                ref={selectRef}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
