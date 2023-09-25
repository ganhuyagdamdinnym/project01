export function Box3(props) {
  //console.log(props.text);
  return (
    <div>
      <div className="home">
        <img className="icon" src={props.icon} />
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}
