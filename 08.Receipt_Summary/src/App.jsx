const App = () => {
   let products = [
     { id: 1, name: "Laptop", price: 5000, quantity: 2 },
     { id: 2, name: "Headphone", price: 1500, quantity: 3 },
     { id: 3, name: "Mouse", price: 500, quantity: 1 },
   ];

   let grand_total=products.reduce((acc,items)=>{
    return acc +items.price * items.quantity
   },0)

    let total_quantity = products.reduce((acc, items) => {
      return acc +  items.quantity;
    }, 0);
  return (
    <div>
      {
        products.map((items)=>(
          <div>
            <h2>{items.name}</h2>
            <p>{items.price}</p>
            <p>{items.quantity}</p>
          </div>
        ))
      }
      <hr />
      <p>Grand Total: {grand_total}</p>
      <p>Total Quantity: {total_quantity}</p>
    </div>
  )
}

export default App
