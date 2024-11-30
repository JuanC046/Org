import "./Team.css";


import Member from "../Member/Member";
const Team = ({ team, members, deleteMember, updateColor }) => {
    const { name, primaryColor, secondaryColor } = team;
    

    const handleColorChange = (e) => {
        updateColor(e.target.value, name);
    };
    return (
        <>
            {members.length > 0 && (
                <section
                    className="team"
                    style={{
                        backgroundColor: secondaryColor,
                    }}
                >
                    <input className="color-picker" type="color" value={secondaryColor}
                    onChange={handleColorChange}/>
                    <h3
                        style={{
                            borderColor: primaryColor,
                        }}
                    >
                        {name}
                    </h3>
                    <div className="team-members">
                        {members.map((member, index) => (
                            <Member
                                key={index}
                                member={member}
                                primaryColor={primaryColor}
                                deleteMember={deleteMember}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};
export default Team;
