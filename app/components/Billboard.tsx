"use client"
import useFetch from "../hooks/useFetch"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Billboard = () => {
  const { data } = useFetch("/api/random")
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[30%] md:top[40%] ml-4 md:ml-6">
        <p className="text-white text-1xl md:text-5xl lg:text-6xl w-[50%] font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <button className="bg-white bg-opacity-30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center gap-3 mt-3 md:mt-4 hover:bg-opacity-20 transition">
          <AiOutlineInfoCircle />
          More Info
        </button>
      </div>
    </div>
  )
}

export default Billboard
