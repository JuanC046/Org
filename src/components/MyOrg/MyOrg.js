import './MyOrg.css';
const MyOrg = (props) => {
  return (
    <section className="org-section">
      <h3>Mi organización</h3>
      <img src="/img/add.png" alt="Añadir" onClick={props.setShow}/>
    </section>
  );
}
export default MyOrg;