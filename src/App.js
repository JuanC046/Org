import { useState } from "react";

import "./App.css";

// Componentes
import Header from "./components/header/Header";
import Form from "./components/Form/Form";
import MyOrg from "./components/MyOrg/MyOrg";
function App() {
    const [showForm, setShowForm] = useState(false);
    const setShow = () => {
        setShowForm(!showForm);
    };
    return (
        <div className="App">
            <Header />
            {showForm && <Form />} {/* {showForm ? <Form /> : null} */}
            <MyOrg setShow={setShow} />
        </div>
    );
}

export default App;
