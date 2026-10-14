import demo from "./assets/Demo_Profile.png";
import "./App.css";

const App = () => {
  const data = {
    name: "Nayan Mishra",
    job: "Frontend Developer",
    location: "Pune",
    description:
      "Passionate frontend developer focused on creating real-world applications",
    image: demo,
  };

  return (
    <div className="page">
        <img className="profile-image" src={data.image} alt={data.name} />

        <h1>{data.name}</h1>

        <p className="job">{data.job}</p>

        <p>{data.location}</p>

        <p className="description">{data.description}</p>
      </div>
  );
};

export default App;
