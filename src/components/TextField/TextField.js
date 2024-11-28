import './TextField.css'
const TextField = ({ label, placeholder }) => {
    return (
        <div className='textfield'>
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    );
};

export default TextField;
