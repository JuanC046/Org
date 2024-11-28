import './TextField.css'
const TextField = ({ label, placeholder, required }) => {
    return (
        <div className='textfield'>
            <label>{label}</label>
            <input placeholder={placeholder} required={required} />
        </div>
    );
};

export default TextField;
