import "./OptionsList.css";

const OptionsList = ({ value, setValue, required, options }) => {
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="options-list">
            <label>Equipo</label>
            <select value={value} onChange={handleChange} required={required}>
                <option value='' defaultValue="" disabled hidden>
                    Seleccionar equipo
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};
export default OptionsList;
