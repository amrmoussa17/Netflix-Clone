"use client"
import Billboard from "./components/Billboard"
import InfoModal from "./components/InfoModal"
import MovieList from "./components/MovieList"
import NavBar from "./components/NavBar"
import useFetch from "./hooks/useFetch"
import useInfoModal from "./hooks/useInfoModal"

export default function Home() {
  const { data: movies = [] } = useFetch("/api/movies")
  const { data: favorites = [] } = useFetch("/api/favorite")
  const { isOpen, closeModal } = useInfoModal()

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <NavBar />
      <Billboard />
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favorites} title="My List" />
      </div>
    </>
  )
}
