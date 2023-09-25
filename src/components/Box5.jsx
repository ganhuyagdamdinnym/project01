export const Box5 = (props) => {
  return (
    <div>
      <div className="library">
        <img className="icon" src={props.icon} />
        <h1>{props.text}</h1>
      </div>
    </div>
  );
};
