import React from "react"
import Homeless from "../images/homeless.jpg"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="leading-tight text-5xl mt-0 mb-2 text-blue-600 p-8">
                Is Steve Cohen Poor?
            </h1>
            <button
                onClick={() => navigate("/story")}
                className="p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Click Here To Find Out?
            </button>
            <img className="p-8" src={Homeless} alt="Homeless guy" />
        </div>
    )
}
