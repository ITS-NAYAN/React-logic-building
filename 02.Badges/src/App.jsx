import Badge from "./components/Badge";
const App = () => {
  const data = [
    {
      id: "1",
      name: "Rahul Sharma",
      status: "active",
    },
    {
      id: "2",
      name: "Rohit Sharma",
      status: "active"
      
    },
    {
      id: "3",
      name: "Varun Sharma",
      status: "inactive",
    },
  ];
  return (
    <div>
      <h1>BADGE</h1>
      {data.map((item) => (
        <Badge key={item.id} name={item.name} status={item.status}
        />
      ))}
    </div>
  );
};

export default App;
