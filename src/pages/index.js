import { Box } from "@/components/Box";
import { Box2 } from "@/components/Box2";
import { Box3 } from "@/components/Box3";
import { Box4 } from "@/components/Box4";
import { Box5 } from "@/components/Box5";
import { Box6 } from "@/components/Box6";
import { Box7 } from "@/components/Box7";
import videos from "@/assets/videos.json";
import box from "@/assets/box.json";
import array3 from "@/assets/array3.json";
import array4 from "@/assets/array4.json";
import settings from "@/assets/settings.json";
import more from "@/assets/more.json";
import item from "@/assets/item.json";
import { Item } from "@/components/Item";
import { useState } from "react";
export default function Home() {
  const [idvalue, setIdvalue] = useState("");
  const [data, setData] = useState(videos);
  //setData(videos);
  function search(e) {
    if (e.key == "Enter") {
      console.log(e.target.value);
      const newData = videos.filter((el) => {
        if (el.artist.includes(e.target.value)) {
          return true;
        }
        return false;
        setIdvalue("");
      });
      e.target.value = "";

      setData(newData);
    } else if (e.target.value == "" && e.key === "Backspace") {
      setData(videos);
      console.log("eee");
    }
  }
  return (
    <div>
      <div className="head1">
        <div>
          <img className="h-20 w-50 " src="Yt-Button.png" />
        </div>
        <div className="flex ">
          <input
            onKeyDown={search}
            onChange={(e) => setIdvalue(e.target.value)}
            value={idvalue}
            className="h-10 w-80 mt-6 bg-black text-white border-none"
            placeholder="ID Search"
          />
          <img className="h-10 w-20 mt-6" src="search.png" />
        </div>
        <div className="flex flex-wrap gap-6 mt-6">
          <img className="h-10 w-10" src="create.png" />
          <img className="h-10 w-10" src="apps.png" />
          <img className="h-10 w-10" src="nota.png" />
          <img className="h-10 w-10" src="userAvatar.png" />
        </div>
      </div>
      <div className="parents">
        <div className="text">
          <div className="text2">
            <div className="borderh">
              {box.map((elements) => (
                <Box3 text={elements.text} icon={elements.icon} />
              ))}
            </div>
          </div>
          <div className="borderh">
            {array3.map((text) => (
              <Box2 text2={text.text} icon={text.icon} />
            ))}
          </div>
          <div className="borderh">
            <h1 className="text1">SUBSCRIPTIONS</h1>
            {array4.map((text) => (
              <Box4 text2={text.name} avatar={text.userAvatar} />
            ))}
          </div>
          <div className="borderh">
            <h1 className="text1 ">MORE FROM YOUTUBE</h1>
            {more.map((ele) => (
              <Box5 text={ele.text} icon={ele.icon} />
            ))}
          </div>
          <div className="borderh">
            {settings.map((ele) => (
              <Box6 text={ele.text} icon={ele.icon} />
            ))}
          </div>
          <div>
            <Box7 />
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-6 w-full bg-[#2b2828]">
            <div className="flex gap-4 bg-[#2b2828]">
              {item.map((element, index) => (
                <Item element={element} key={index} />
              ))}
            </div>
            {/* <div className="flex gap-6">
              {item.map((element, index) => (
                <Item element={element} key={index} />
              ))}
            </div> */}
          </div>
          <div className="w-full flex flex-wrap gap-10 justify-center">
            {data.map((element) => (
              <Box
                artist={element.artist}
                video={element.video}
                avatar={element.avatar}
                view={element.view}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
