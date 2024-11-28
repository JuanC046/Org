import "./OptionsList.css";

const OptionsList = ({ value, setValue, required }) => {
    const options = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ];

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
