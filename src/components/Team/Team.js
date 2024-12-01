import "./Team.css";

import hexToRgba from "hex-to-rgba";

import Member from "../Member/Member";
const Team = ({ team, members, deleteMember, updateColor }) => {
    const { id, name, primaryColor } = team;
    
    const backgroundColor = hexToRgba(primaryColor, "0.5");
    const handleColorChange = (e) => {
        updateColor(e.target.value, id);
    };
    return (
        <>
            {members.length > 0 && (
                <section
                    className="team"
                    style={{
                        backgroundColor: backgroundColor,
                    }}
                >
                    <input className="color-picker" type="color" value={primaryColor}
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
