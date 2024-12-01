import { useState } from "react";

import "./Form.css";

import InputField from "../InputField/InputField";
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";
const Form = ({ teams, newMember, newTeam }) => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const [teamName, setTeamName] = useState("");
    const [teamPrimaryColor, setTeamPrimaryColor] = useState("#FFFFFF");

    const [create, setCreate] = useState("member");

    const handleSubmitMember = (event) => {
        event.preventDefault();
        const data = {
            name,
            role,
            photo,
            team,
        };
        newMember(data);
    };
    const handleSubmitTeam = (event) => {
        event.preventDefault();
        const data = {
            name: teamName,
            primaryColor: teamPrimaryColor,
        };
        newTeam(data);
    };
    return (
        <section className="form">
            <nav className="form__nav">
                <button onClick={() => setCreate("member")}>
                    Crear colaborador
                </button>
                <button onClick={() => setCreate("team")}>Crear equipo</button>
            </nav>
            {create === "member" ? (
                <form onSubmit={handleSubmitMember}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <InputField
                        label="Nombre"
                        placeholder="Ingresar nombre"
                        value={name}
                        setValue={setName}
                        required
                    />
                    <InputField
                        label="Puesto"
                        placeholder="Ingresar puesto"
                        value={role}
                        setValue={setRole}
                        required
                    />
                    <InputField
                        label="Foto"
                        placeholder="Ingresar enlace de foto"
                        value={photo}
                        setValue={setPhoto}
                        required
                    />
                    <OptionsList
                        value={team}
                        setValue={setTeam}
                        required
                        options={teams}
                    />
                    <Button text="Crear colaborador" />
                </form>
            ) : (
                <form onSubmit={handleSubmitTeam}>
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <InputField
                        label="Nombre del equipo"
                        placeholder="Ingresar nombre del equipo"
                        value={teamName}
                        setValue={setTeamName}
                        required
                    />
                    <InputField
                        label="Color"
                        placeholder="Ingresar color en hexadecimal"
                        value={teamPrimaryColor}
                        setValue={setTeamPrimaryColor}
                        type={"color"}
                        required
                    />
                    <Button text="Crear equipo" />
                </form>
            )}
        </section>
    );
};
export default Form;
