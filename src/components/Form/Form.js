import "./Form.css";

import TextField from "../TextField/TextField";
import OptionsList from "../OptionsList/OptionsList";
import Button from "../Button/Button";
const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado");
    }
    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <TextField label="Nombre" placeholder="Ingresar nombre" required />
                <TextField label="Puesto" placeholder="Ingresar puesto" />
                <TextField label="Foto" placeholder="Ingresar enlace de foto" />
                <OptionsList />
                <Button text="Crear colaborador" />
            </form>
        </section>
    );
};
export default Form;
