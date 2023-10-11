import Image from "next/image";
import { useState } from "react";
import { Comment2 } from "@/components/Comment2";
import { Dislike } from "./Dislike2";
import { Like } from "./Like2";
export function Comment(props) {
  const array = props.comarray;
  const [com, setCom] = useState([]);
  const [value_, setValue_] = useState("");
  const [num, setNum] = useState(0);
  const [status, setStatus] = useState(true);
  const [likecount, setLikecount] = useState(0);
  const [barsstatus, setBarstatus] = useState(false);
  const [allstatus, setAllstatus] = useState(true);
  function change1() {
    const newCom = [...com];
    newCom.push({ num: num + 1, task: value_ });
    setCom(newCom);
    setNum(num + 1);

    console.log("value", value_);
    setValue_("");
    setStatus(false);

    console.log("aaa", com);
    const bigcom = [...array];
    bigcom.push();
  }

  function bars() {
    setBarstatus(true);
    console.log("hello");
  }
  function barsleave() {
    setBarstatus(false);
  }
  function dashs() {
    setAllstatus(!allstatus);
  }

  return (
    <div>
      {allstatus ? (
        <div
          className="flex gap-6 ml-8 mt-7"
          onMouseOver={() => bars()}
          onMouseLeave={() => barsleave()}
        >
          <div>
            <img className=" w-12 h-12" src="userAvatar.png" />
          </div>
          <div className="flex  mt-1 h-20 flex-col w-full">
            <h1 className="w-28 ">Your comment</h1>
            <h1 className="break-all mt-3">{props.task}</h1>
            <div className="flex">
              <div className="flex  mt-2">
                <div className="flex">
                  <h1 className="w-2 mb-">{likecount}</h1>
                  <Like
                    src="image.svg"
                    width={16}
                    height={16}
                    count={likecount}
                    setCount={setLikecount}
                  />
                </div>
                <Dislike />
              </div>
              {barsstatus ? (
                <div className="w-80 flex flex-row-reverse ">
                  <Image
                    onClick={() => dashs()}
                    src="bars.svg"
                    width={24}
                    height={24}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
