import { useState } from "react";

import "./Form.css";

import TextField from "../TextField/TextField";
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";
const Form = ({ teams, newMember, newTeam }) => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const [teamName, setTeamName] = useState("");
    const [teamPrimaryColor, setTeamPrimaryColor] = useState("");

    const [create, setCreate] = useState("member");

    const handleSubmitMember = (event) => {
        event.preventDefault();
        const data = {
            name,
            role,
            photo,
            team,
        };
        console.log("Formulario enviado", data);
        newMember(data);
    };
    const handleSubmitTeam = (event) => {
        event.preventDefault();
        const data = {
            name: teamName,
            primaryColor: teamPrimaryColor,
        };
        console.log("Formulario enviado", data);
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
                    <TextField
                        label="Nombre"
                        placeholder="Ingresar nombre"
                        value={name}
                        setValue={setName}
                        required
                    />
                    <TextField
                        label="Puesto"
                        placeholder="Ingresar puesto"
                        value={role}
                        setValue={setRole}
                        required
                    />
                    <TextField
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
                    <TextField
                        label="Nombre del equipo"
                        placeholder="Ingresar nombre del equipo"
                        value={teamName}
                        setValue={setTeamName}
                        required
                    />
                    <TextField
                        label="Color"
                        placeholder="Ingresar color en hexadecimal"
                        value={teamPrimaryColor}
                        setValue={setTeamPrimaryColor}
                        required
                    />
                    <Button text="Crear equipo" />
                </form>
            )}
        </section>
    );
};
export default Form;
