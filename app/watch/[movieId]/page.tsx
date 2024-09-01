"use client"
import useFetch from "../../hooks/useFetch"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/navigation"

const Watch = ({ params }: { params: { movieId: string } }) => {
  const router = useRouter()
  const movieId = params.movieId
  const { data } = useFetch(`/api/movies/${movieId}`)
  return (
    <div className="bg-black w-screen h-screen">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          size={40}
          className="cursor-pointer text-white"
          onClick={() => {
            router.push("/")
          }}
        />
        <p className="text-white font-bold text-1xl md:text-3xl">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        className="w-full h-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  )
}

export default Watch
