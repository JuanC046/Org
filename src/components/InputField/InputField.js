import "./InputField.css";
const InputField = ({
    label,
    placeholder,
    value,
    setValue,
    required,
    type,
}) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="input-field">
            <label>{label}</label>
            <input
                type={type || "text"}
                className={`default-input input-${type}`}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputField;
