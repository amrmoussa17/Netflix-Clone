import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai"
import useFetch from "../hooks/useFetch"
import axios from "axios"
import { useMemo } from "react"

const FavoriteButton = ({ movieId }: { movieId: string }) => {
  const { data: currentUser, mutate } = useFetch("/api/current")
  const { mutate: mutateFavorites } = useFetch("/api/favorite")

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []
    return list.includes(movieId)
  }, [movieId, currentUser])

  const toggleFavorites = async () => {
    let response
    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } })
    } else {
      response = await axios.post("/api/favorite", { movieId })
    }
    const updatedFavoriteIds = response?.data?.favoriteIds
    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    })
    mutateFavorites()
  }

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div
      onClick={toggleFavorites}
      className="
        group/item
        cursor-pointer 
        w-6 
        h-6
        lg:w-10
        lg:h-10
        border-2
        rounded-full
        flex 
        justify-center
        items-center
        transition
        hover:border-neutral-300
    "
    >
      <Icon className="text-white" size={25} />
    </div>
  )
}

export default FavoriteButton
