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
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import link from "@/assets/link.json";
import Image from "next/image";
import { Roboto, Roboto_Flex } from "next/font/google";
import { italic } from "next/font/google";
const roboto = Roboto_Flex({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  //console.log("FONT: ", roboto);
  const [idvalue, setIdvalue] = useState("");
  const [data, setData] = useState(videos);
  const [done, setDone] = useState(false);
  const [text3, setText3] = useState();
  const router = useRouter();
  const [xstatus, setXstatus] = useState(false)
  function search(e) {
    if (e.key == "Enter") {
      const value = e.target.value.toLowerCase();
      console.log(e.target.value);
      const newData = videos.filter((el) => {
        const artist = el.artist.toLowerCase();
        console.log(el.artist);
        if (artist.includes(value)) {
          return true;
        }
        return false;
      });
      e.target.value = "";

      setData(newData);
    } else if (e.target.value == "" && e.key === "Backspace") {
      setData(videos);
      console.log("eee");
      setXstatus(false);
    }
    setXstatus(true)
  }
  function remove1() {
    setDone(!done);
    console.log(done);
  }
  function sorts(element) {
    const newsort = videos.filter((e) => element == e.catygory);
    setData(newsort);
  }
  function all() {
    console.log("aa");
    setData(videos);
  }
  function watch(id, channelId) {
    router.push("/watch?videoId=" + id + "&channelId=" + channelId + "  ");
    console.log("ssss", channelId)
  }
  function xxxxx() {
    setIdvalue("")
    setXstatus(false)
  }
  return (
    <div className={roboto.className}>
      <div className="head1 ">
        <div className="flex gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="flex mt-8"
            onClick={remove1}
          >
            <path
              fill="white"
              d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
            />
          </svg>
          <img className="h-6 w-24 mt-7 " src="youtube.png" />
        </div>
        <div className="flex border-[1px] w-5/12 border-white h-10 rounded-3xl mt-6 items-center">
          <input
            onKeyDown={search}
            onChange={(e) => setIdvalue(e.target.value)}
            value={idvalue}
            className="flex pl-2  w-full rounded-3xl bg-black text-white border-none outline-none"
            placeholder="Search"
          />
          <div>
            {xstatus ? (<Image onClick={() => xxxxx()} className="mr-3" src="Xno.svg" width={16} height={16} />) : (
              <div>
              </div>
            )}

          </div>
          <div className="w-11 border-l-[1px] border-white h-10 rounded-r-3xl flex justify-content items-center">
            <Image src="search.svg" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-6">
          <img className="h-10 w-10" src="create.png" />
          <img className="h-10 w-10" src="apps.png" />
          <img className="h-10 w-10" src="nota.png" />
          <img className="h-10 w-10" src="userAvatar.png" />
        </div>
      </div>
      <div className="parents">
        <div>


          {done ? (
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
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="flex flex-row gap-6 w-fullvw h-12 ">
            <div className="flex gap-4">
              <div className="ml-40">
                <button
                  onClick={() => all()}
                  className="bg-[#494b4d] rounded-lg w-28 mt-3 text-white border-1"
                >
                  All content
                </button>
              </div>
              {item.map((element) => (
                <Item element={element.cat} cate={sorts} />
              ))}
            </div>
          </div>
          <div className="max-w-full flex flex-wrap gap-10 justify-center">
            {data.map((element) => (
              <Box
                watch_video={watch}
                artist={element.artist}
                video={element.video}
                avatar={element.avatar}
                view={element.view}
                id={element.id}
                channelId={element.channelId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
