import "./TextField.css";
const TextField = ({ label, placeholder, value, setValue, required }) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="textfield">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextField;
