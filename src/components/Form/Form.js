import { useState } from "react";

import "./Form.css";

import TextField from "../TextField/TextField";
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";
const Form = ({teams}) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            position,
            photo,
            team,
        };
        console.log("Formulario enviado", data);
    };
    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
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
                    value={position}
                    setValue={setPosition}
                    required
                />
                <TextField
                    label="Foto"
                    placeholder="Ingresar enlace de foto"
                    value={photo}
                    setValue={setPhoto}
                    required
                />
                <OptionsList value={team} setValue={setTeam} required options={teams} />
                <Button text="Crear colaborador" />
            </form>
        </section>
    );
};
export default Form;
