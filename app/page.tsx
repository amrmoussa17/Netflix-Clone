"use client"
import Billboard from "./components/Billboard"
import MovieList from "./components/MovieList"
import NavBar from "./components/NavBar"
import useFetch from "./hooks/useFetch"

export default function Home() {
  const { data: movies = [] } = useFetch("/api/movies")
  const { data: favorites = [] } = useFetch("/api/favorite")
  return (
    <>
      <NavBar />
      <Billboard />
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favorites} title="My List" />
      </div>
    </>
  )
}
