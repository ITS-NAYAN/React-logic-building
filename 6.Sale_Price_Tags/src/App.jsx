const App = () => {

  let products = [
    {
      id: 1,
      name: "LAPTOP",
      price: 100000,
      discount: 10,
    },
    {
      id: 2,
      name: "MOBILE",
      price: 20000,
      discount: 0,
    },
    {
      id: 3,
      name: "HEADPHONE",
      price: 1000,
      discount: 10,
    }
  ];

  return (
    <div>
      {products.map((items) => (
        <>
        <h1>Product Name = {items.name}</h1>
          <h1>Original Price = {items.price}</h1>
          <h1> Discounted Price = 
             {
               ( discounted_price =
                items.price - (items.price * items.discount) / 100)
            }
          </h1>
          <p>{items.discount > 0?"SALE":"NOT SALE"}</p>
        </>
      ))}
      
    </div>
  );
}

export default App
