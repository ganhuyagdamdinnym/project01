export function Comment2(props) {
  console.log("wasd", props.task);
  console.log("aaaaa");
  return (
    <div>
      <h1 className="text-white">{props.task}</h1>
    </div>
  );
}
