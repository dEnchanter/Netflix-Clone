import { InformationCircleIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"
import {FaPlay} from 'react-icons/fa';
import { modalState, movieState } from "../atoms/modalAtom"
import { useRecoilState } from "recoil"

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {

  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image 
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg">{movie?.overview}</p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-3 w-3 text-black md:h-5 md:w-5" /> Play 
        </button>
        <button 
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>
          More Info <InformationCircleIcon className="h-3 w-3 md:h-5 md:w-5" />
        </button>
      </div>
      
    </div>
  )
}

export default Banner