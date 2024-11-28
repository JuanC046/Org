import "./OptionsList.css";

const OptionsList = () => {
    const options = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ];
    return (
        <div className="options-list">
            <label>Equipo</label>
            <select>
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    );
};
export default OptionsList;
