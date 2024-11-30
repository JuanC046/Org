import "./Member.css";
import { FaUserMinus } from "react-icons/fa";
const Member = ({ member, primaryColor, deleteMember }) => {
    return (
        <div className="member">
            <FaUserMinus
                className="member__delete"
                onClick={() => deleteMember(member)}
            />
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
