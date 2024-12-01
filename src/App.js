import { useState } from "react";

import { v4 as uuid } from "uuid";

import "./App.css";

// Componentes
import Header from "./components/header/Header";
import Form from "./components/Form/Form";
import MyOrg from "./components/MyOrg/MyOrg";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";


function App() {
    const [showForm, setShowForm] = useState(false);
    const [teams, setTeams] = useState([
        {
            id: uuid(),
            name: "Programación",
            primaryColor: "#57C278",
        },
        {
            id: uuid(),
            name: "Front End",
            primaryColor: "#82CFFA",
        },
        {
            id: uuid(),
            name: "Data Science",
            primaryColor: "#A6D157",
        },
        {
            id: uuid(),
            name: "Devops",
            primaryColor: "#E06B69",
        },
        {
            id: uuid(),
            name: "UX y Diseño",
            primaryColor: "#DB6EBF",
        },
        {
            id: uuid(),
            name: "Móvil",
            primaryColor: "#FFBA05",
        },
        {
            id: uuid(),
            name: "Innovación y  Gestión",
            primaryColor: "#FF8A29",
        },
    ]);
    const [members, setMembers] = useState([
        {
            id: uuid(),
            name: "Juan López",
            role: "Desarrollador",
            photo: "https://media.licdn.com/dms/image/v2/D4E03AQEETDRGt8ceAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693932494749?e=1738195200&v=beta&t=LT_0zDOHCtUj-siS4nTbENNkSoqlaO7mgHTYcNZM9No",
            team: "Front End",
        },
        {
            id: uuid(),
            name: "Juan López",
            role: "Desarrollador",
            photo: "https://media.licdn.com/dms/image/v2/D4E03AQEETDRGt8ceAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693932494749?e=1738195200&v=beta&t=LT_0zDOHCtUj-siS4nTbENNkSoqlaO7mgHTYcNZM9No",
            team: "Data Science",
        },
        {
            id: uuid(),
            name: "Juan López",
            role: "Desarrollador",
            photo: "https://media.licdn.com/dms/image/v2/D4E03AQEETDRGt8ceAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693932494749?e=1738195200&v=beta&t=LT_0zDOHCtUj-siS4nTbENNkSoqlaO7mgHTYcNZM9No",
            team: "Data Science",
        },
        {
            id: uuid(),
            name: "Juan López",
            role: "Desarrollador",
            photo: "https://media.licdn.com/dms/image/v2/D4E03AQEETDRGt8ceAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693932494749?e=1738195200&v=beta&t=LT_0zDOHCtUj-siS4nTbENNkSoqlaO7mgHTYcNZM9No",
            team: "Programación",
        },
    ]);

    const setShow = () => {
        setShowForm(!showForm);
    };

    const updateColor = (color, teamId) => {
        setTeams(
            teams.map((team) => {
                if (team.id === teamId) {
                    team.primaryColor = color;
                }
                return team;
            })
        );
    };

    const newMember = (member) => {
        member.id = uuid();
        console.log("New member:", member);
        setMembers([...members, member]);
    };
    const deleteMember = (memberId) => {
        setMembers(members.filter((member) => member.id !== memberId));
    };

    const newTeam = (team) => {
        team.id = uuid();
        console.log("New team:", team);
        setTeams([...teams, team]);
    }
    return (
        <div className="App">
            <Header />
            {showForm && (
                <Form
                    teams={teams.map((team) => team.name)}
                    newMember={newMember}
                    newTeam={newTeam}
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
                    deleteMember={deleteMember}
                    updateColor={updateColor}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
