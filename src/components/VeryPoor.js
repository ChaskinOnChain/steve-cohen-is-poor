import React from "react"
import { useNavigate } from "react-router-dom"

export default function VeryPoor() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center p-8 h-screen">
            <h1 className="leading-tight text-3xl mt-0 mb-2 text-blue-600 p-8">
                Click the video to see a graph of Steve Cohen's net worth
            </h1>
            <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/CpR2kMxy7O8"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <button
                onClick={() => navigate("/hesbroke")}
                className="p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
            >
                Last Page, Click Here
            </button>
        </div>
    )
}
