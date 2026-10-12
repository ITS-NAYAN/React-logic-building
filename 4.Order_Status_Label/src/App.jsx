const App = () => {

  let status = "delivered";
  var label;

  if (status=="processing"){
    label="Processing Order";
  }
  else if (status == "shipped"){
    label = "Order Shipped";
  }
  else if (status == "delivered"){
    label = "Order Delivered";
  }
  else if (status == "cancelled"){
    label = "Order Cancelled";
  }
  else {
    label = "Unknown Status";
  }
    return (
      <div>
        <h1>HELLO WORLD</h1>
        <p>{label}</p>
      </div>
    );
}

export default App
