import "./Team.css";

import Member from "../Member/Member";
const Team = ({ team, members }) => {
    const { name, primaryColor, secondaryColor } = team;
    return (
        <>
            {members.length > 0 && (
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
                    <div className="team-members">
                        {members.map((member, index) => (
                            <Member key={index} member={member} primaryColor={primaryColor}/>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};
export default Team;
