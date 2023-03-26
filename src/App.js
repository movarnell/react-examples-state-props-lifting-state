// Importing useState hook from React library and Bootstrap CSS from a local file
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// Importing custom components from local files
import State from './components/State';
import Child from './components/Child';
import OrderView from './components/OrderView';
import OrderMenu from './components/OrderMenu';

// Defining an object called taco
let taco = { 
  name: "Taco", 
  value: 5, 
  taste: "amazing" };

// App component is defined here which is the root component of the application
function App() {
  // Declaring a state called 'order' using the useState hook with an initial value of 'none'
  const [order, setOrder] = useState("none");
 
  // Rendering child components using JSX
  return (
    <>
      <Child props={taco} />
      <State />
     <div className='lead fw-bold ms-3'>
      <OrderView order={order} />
      <OrderMenu setOrder={setOrder} />
      </div>
    </>
  );
}

// Exporting the App component as the default export
export default App;
