export function Main(props) {
  return (
    <div className="flex">
      <div className="flex mt-3">
        <img
          onClick={() => props.image(props.id, props.channelId)}
          src={props.video}
          className="w-[150px] h-[100px] rounded-xl"
        />
      </div>
      <div>
        <h1 className="mt-3 ml-3">{props.artist} </h1>
        <p className="text-[#797676] ml-3 text-sm">{props.view}</p>
      </div>
    </div>
  );
}
