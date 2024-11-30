import "./Team.css";

const Team = ({ team }) => {
    const { name, primaryColor, secondaryColor } = team;
    return (
        <section
            className="team"
            style={{
                backgroundColor: secondaryColor,
            }}
        >
            <h3
                style={{
                    borderColor: primaryColor,
                }}
            >
                {name}
            </h3>
            <div className="team-members"></div>
        </section>
    );
};
export default Team;
