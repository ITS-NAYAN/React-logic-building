const App = () => {

  var time=18 ;
  var greeting;

  if (time >= 5 && time <= 11) {
    greeting="Good Morning";
  } else if (time >= 12 && time <= 17) {
    greeting="Good Afternoon";
  } else if (time >= 18 && time <= 21) {
    greeting="Good Evening";
  } else {
    greeting="Good Night";
  }

  return (
    <div>
      <h1>Time-of-Day Greeting</h1>
      <h2>Greeting according to time is: {greeting} </h2>
    </div>
  );
};

export default App
