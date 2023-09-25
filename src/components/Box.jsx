export function Box(props) {
  //let background = "url(" + props.video + ")"
  //console.log(background)
  return (
    <div className="main">
      <div>
        {/* <div style={{width: "300px", height: "200px", backgroundImage       :{background}}}></div> */}
        <img src={props.video} />
        <div className="header">
          <div>
            <img className="avatar" src={props.avatar} />
          </div>

          <div>
            <h1>{props.artist}</h1>
            <h3>{props.view}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
