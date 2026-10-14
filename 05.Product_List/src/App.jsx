import "./App.css";

const App = () => {
  let data = [
    {
      id: "1",
      name: "Sony Headphone",
      price: "1,500",
    },
    {
      id: "2",
      name: "Lenevo Mouse",
      price: "599",
    },
    {
      id: "3",
      name: "Asus Laptop",
      price: "1,00,000",
    },
  ];
  return (
    
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p >{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
