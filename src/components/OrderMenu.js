// This component displays two buttons that allow the user to set the order by calling the setOrder function passed down from the parent component through the props object. The first button sets the order to "Tacos", and the second button sets it to "Fajitas".
export default function OrderMenu(props) {
    return (
  <>
  <button className="btn btn-success m-2"onClick={() => props.setOrder("Tacos")}>Tacos</button>
  <button className="btn btn-success m-2" onClick={() => props.setOrder("Fajitas")}>Fajitas</button>
  </>
  
    )
  }