export default function SelectInput({
    name,
    options, // Array of options
    handleChange,
    selectedValue, // Initially selected value
}) {
    return (
        <select
            name={name}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
            onChange={handleChange}
            value={selectedValue}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
