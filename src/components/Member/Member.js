import "./Member.css";

const Member = ({ member, primaryColor }) => {
    return (
        <div className="member">
            <div className="member__header" style={{backgroundColor: primaryColor}}>
                <img src={member.photo} alt={member.name} />
            </div>
            <div className="member__info">
                <h4>{member.name}</h4>
                <h5>{member.role}</h5>
            </div>
        </div>
    );
};

export default Member;
