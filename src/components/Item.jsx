export const Item = (props) => {
  return (
    <div>
      <button
        onClick={() => props.cate(props.element)}
        className="bg-[#494b4d] rounded-lg px-4 mt-3 text-white  border-white"
      >
        {props.element}
      </button>
    </div>
  );
};
