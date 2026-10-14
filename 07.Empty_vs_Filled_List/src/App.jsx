const App = () => {
  let task=["Study React", " Practice Javascript", " Learn AWS"]
  // let task = [];

  return (
    <div>
      <h1>TASK TO COMPLETE</h1>
    
      {task.length > 0 ? task.map((items) => items) : "EMPTY LIST"}
    </div>
  );
};

export default App;
