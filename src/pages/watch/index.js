import { Main } from "@/components/Main";
import videos from "@/assets/videos.json";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Image from "next/image";

import { Comment } from "@/components/Comment";
import { Dislike } from "@/components/Dislike";
import { Like } from "@/components/Like";
export default function School() {
  const [data, setData] = useState([]);
  const [isdone, setIsdone] = useState(false);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [com, setCom] = useState([]);
  const [num, setNum] = useState(0);
  const [status, setStatus] = useState(false);
  const [reply, setReply] = useState(false);
  const [text3, setText3] = useState({});
  const [loading, setLoading] = useState(true);
  const [discrip, setDiscrip] = useState("")
  const [summaryStatus, setSummaryStatus] = useState(false)
  const [summaryText, setSummaryText] = useState('')
  const [searchText, setSearchText] = useState("")
  const [xstatus, setXstatus] = useState(false)
  const [channeldata, setChanneldata] = useState({})
  //
  const [done, setDone] = useState(false);
  const [dislikedone, setDislikedone] = useState(false);
  /*
  comments = [{ num: 1, task: "asdsa", replies: [{ num: 1, task: "reply1"}, { num: 2, task: "reply2"}] }]
  */
  //setCom1((oldCom) => {...oldCom, replies: [...oldCom.replies, reply]})
  const router = useRouter();

  const params = useSearchParams();
  const id = params.get("videoId");
  const discription = text3?.items?.[0]?.snippet?.description
  const params2 = useSearchParams();
  const channelId = params2.get("channelId")
  console.log("kkk", channelId)

  const fetchText = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAniyPROja143olj6P3a77UtHnGPkXpq9k`;
    const res = await fetch(url).then((res) => res.json());
    setLoading(false);
    setText3(res);
  };
  console.log("llll", text3);
  useEffect(() => {
    if (id) {
      fetchText();
      const newdata = videos.filter((ele) => ele.id != id);
      console.log(id != newdata[1].id);

      setData(newdata);

      setIsdone(true);
    }
  }, [id]);
  //
  const fetchchannel = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&part=snippet&part=statistics&part=status&part=topicDetails&id=${channelId}&key=AIzaSyAniyPROja143olj6P3a77UtHnGPkXpq9k`
    const res = await fetch(url).then((res) => res.json());
    setLoading(false);
    console.log(res)
    setChanneldata(res)
  }
  console.log("aaaaaa", channeldata)
  useEffect(() => {
    if (text3) {

      fetchchannel();

    }

  }, [text3])
  //
  const defaul = channeldata?.items?.[0]?.snippet?.thumbnails?.default?.url
  function image(id, channelId) {
    router.push("/watch?videoId=" + id + "&channelId=" + channelId + "  ");
    console.log("aa", id);
    //+ " &channelId=" + channelId + ""
  }
  function youtube() {
    router.push("/");
  }
  function change1() {
    const newCom = [...com];
    newCom.push({ num: num + 1, task: value });
    setCom(newCom);
    setNum(num + 1);

    console.log(value);
    setValue("");
    setStatus(false);
  }
  function reply_com() {
    setReply(true);
    console.log("yeees");
  }
  function comments(ele) {
    setStatus(true);
    if (ele.target.value == "" && ele.key === "Backspace") {
      setStatus(false);
      console.log("lllllll");
      console.log(status);
    }
  }
  function cancel() {
    setValue("");
    console.log("aa");
  }
  console.log(text3);
  if (loading) {
    return <h1>Loading ... </h1>;
  }
  // function three_dash() {
  //   console.log("hgsdfg");
  // }
  function like() {
    setDone(!done);
    console.log("aaa")
    if (dislikedone == true) {
      setDislikedone(false)
    }
  }
  function dislike() {
    setDislikedone(!dislikedone);
    console.log("aaa")
    if (done == true) {
      setDone(false)
    }
  }
  function summary() {
    const discription = text3?.items?.[0]?.snippet?.description
    setSummaryText(discription.slice(0, 100))
    console.log(summaryText)
    setSummaryStatus(!summaryStatus)
    // setDiscrip(discription)
    console.log("aaa", summaryStatus)
  }
  function Search() {
    let value = searchText.toLowerCase()
    setData([])
    const newsearch =
      videos.filter((element) => {
        const art = element.artist.toLowerCase()
        console.log(art)
        if (art.includes(value)) {
          return (true)
        }
        return (false)

      })
    value = "";
    setData(newsearch)
    setSearchText("")

  }
  function All() {
    setData(videos)
  }
  function gangbay() {
    const newdata = videos.filter((el) =>
      el.team === "gangbay"
    )
    setData(newdata)

  }
  function sear(ele) {
    setXstatus(true)
    if (ele.target.value == "" && ele.key === "Backspace") {
      setXstatus(false);

    }
  }
  function xxxxx() {
    setSearchText("")
    console.log(searchText)
    setXstatus(false)
  }
  return (
    <div>
      <div className="head1">
        <div className="flex gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="flex mt-8"

          >
            <path
              fill="white"
              d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
            />
          </svg>
          <img
            onClick={() => youtube()}
            className="h-6 w-24 mt-7 "
            src="youtube.png"
          />
        </div>
        <div className="flex border-[1px] w-5/12 border-white h-10 rounded-3xl mt-6 items-center">
          <input
            onKeyDown={sear}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="flex pl-2 w-full rounded-3xl bg-black text-white border-none outline-none"
            placeholder="Search"
          />
          <div>
            {xstatus ? (<Image onClick={() => xxxxx()} className="mr-3" src="Xno.svg" width={16} height={16} />) : (
              <div>
              </div>
            )}

          </div>
          <div className="w-11 border-l-[1px] border-white h-10 rounded-r-3xl flex justify-content items-center">
            <Image onClick={() => Search()} src="search.svg" width={16} height={16} className="ml-2" />
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-6">
          <img className="h-10 w-10" src="create.png" />
          <img className="h-10 w-10" src="apps.png" />
          <img className="h-10 w-10" src="nota.png" />
          <img className="h-10 w-10" src="userAvatar.png" />
        </div>
      </div>
      <div className="flex gap-10 ml-2 flex-wrap justify-center">
        <div className="w-7/12">
          <div>
            {isdone && (
              <div className="play">

                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=" + id}
                  // + "  &channelId " + channelId + ""
                  width={"100%"}
                  height={600}
                  className="bg-red-100"
                  controls
                  playing={true}
                  loop
                  muted={false}
                />
              </div>
            )}
            <div className="  border-[#797676]  ">
              <h1 className="text-3xl flex w-full  flex-wrap ">
                {text3.items?.[0]?.snippet?.localized?.title}
              </h1>
              <div className="flex mt-3 ml-1">
                <div className="flex h-12   border-[#494b4d]  ">
                  <div className="flex   gap-2 w-10">
                    <Image height={10} width={10} className="rounded-full w-8 h-8 ml-3" src={defaul} />
                  </div>
                  <div className=" ml-4 mt-1">
                    <h1>{text3?.items?.[0]?.snippet?.channelTitle}</h1>
                  </div>
                </div>

                <button className="bg-[#494b4d] w-40 flex items-center rounded-3xl h-8 pl-2 ">
                  <Like
                    like={like}
                    done={done}
                    setDone={setDone}
                    src="image.svg"
                  />
                  <h1 className=" ">
                    {new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }).format(Number(text3?.items?.[0]?.statistics?.likeCount))}
                  </h1>
                  <Dislike
                    like={dislike}
                    done={dislikedone}
                    width={100} height={100} />
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-[#494b4d] rounded-xl pl-1 flex flex-wrap">
            {summaryStatus ? (
              <div>
                <div className="flex h-3">
                  <h1 className="text-white  w-12">Views</h1>
                  <h1 className="text-white ">
                    {new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }).format(Number(text3?.items?.[0]?.statistics?.viewCount))}
                  </h1>
                </div>
                <h1 className="text-white w-96  mt-3">{discription}
                  <h1 onClick={() => summary()}>...see summary </h1>
                </h1>
              </div>) : (
              <div>
                <div className="flex h-3">
                  <h1 className="text-white  w-12">Views</h1>
                  <h1 className="text-white ">
                    {new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }).format(Number(text3?.items?.[0]?.statistics?.viewCount))}
                  </h1>
                </div>
                <h1 className="text-white w-8/12  mt-3">{text3?.items?.[0]?.snippet?.description.slice(0, 100)}
                  <h1 onClick={() => summary()}>...see more</h1>
                </h1>
              </div>
            )}
          </div>
          <div className="ml-8">
            <div className="border-b-[0.1px] border-white">
              <input
                onKeyDown={(ele) => comments(ele)}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="text-white w-9/12 mt-6 border-none bg-black border-b-[0.5px] outline-none"
                placeholder="add comment..."
              />
            </div>
            {status ? (
              <div className="mt-3 w-9/12 flex flex-row-reverse">
                <button
                  className="w-20 bg-white ml-3  rounded-xl"
                  onClick={() => change1()}
                >
                  Comment
                </button>
                <div>
                  <h1 className="w-16" onClick={() => cancel()}>
                    Cancel
                  </h1>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className=" mt-6">
            {com.map((element) => (
              <Comment
                task={element.task}
                reply={reply_com}
                reply_status={reply}
                comarray={com}
                setcomarray={setCom}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-1 flex-col ">
          <div className="flex gap-6">
            <button onClick={() => All()} className="bg-[#494b4d] rounded-lg  mt-3 text-white  border-white px-3">
              {" "}
              all
            </button>
            <button onClick={() => gangbay()} className="bg-[#494b4d] rounded-lg  mt-3 text-white  border-white px-3">
              {" "}
              gangbay's song
            </button>
          </div>
          {data.map((element) => (
            <Main
              image={image}
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
  );
}
