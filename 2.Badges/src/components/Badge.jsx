import "./Badge.css"
const Badge = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p className="badge">
        {props.status === "active" ? <span className="active">ACTIVE</span> : <span className="inactive">INACTIVE</span> }
      </p>
    </div>
  );
}

export default Badge
