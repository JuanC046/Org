import { useState } from "react";

import "./App.css";

// Componentes
import Header from "./components/header/Header";
import Form from "./components/Form/Form";
import MyOrg from "./components/MyOrg/MyOrg";
import Team from "./components/Team/Team";
function App() {
    const [showForm, setShowForm] = useState(false);
    const [members, setMembers] = useState([]);

    const setShow = () => {
        setShowForm(!showForm);
    };

    // Teams list
    const teams = [
        {
            name: "Programación",
            primaryColor: "#57C278",
            secondaryColor: "#D9F7E9",
        },
        {
            name: "Front End",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            name: "Data Science",
            primaryColor: "#A6D157",
            secondaryColor: "#F0F8E2",
        },
        { name: "Devops", primaryColor: "#E06B69", secondaryColor: "#FDE7E8" },
        {
            name: "UX y Diseño",
            primaryColor: "#DB6EBF",
            secondaryColor: "#FAE9F5",
        },
        { name: "Móvil", primaryColor: "#FFBA05", secondaryColor: "#FFF5D9" },
        {
            name: "Innovación y  Gestión",
            primaryColor: "#FF8A29",
            secondaryColor: "#FFEEDF",
        },
    ];

    const newMember = (member) => {
        console.log("New member:", member);
        setMembers([...members, member]);
    };

    return (
        <div className="App">
            <Header />
            {showForm && (
                <Form
                    teams={teams.map((team) => team.name)}
                    newMember={newMember}
                />
            )}{" "}
            {/* {showForm ? <Form /> : null} */}
            <MyOrg setShow={setShow} />
            {teams.map((team, index) => (
                <Team
                    key={index}
                    team={team}
                    members={members.filter(
                        (member) => member.team === team.name
                    )}
                />
            ))}
        </div>
    );
}

export default App;
