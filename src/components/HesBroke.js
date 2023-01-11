import React, { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"
import { useNavigate } from "react-router-dom"

export default function HesBroke() {
    const navigate = useNavigate()
    const [windowDim, setWindowDim] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    const [btn, setBtn] = useState(false)

    const detectSize = () => {
        setWindowDim({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener("resize", setWindowDim)
        return () => {
            window.removeEventListener("resize", setWindowDim)
        }
    }, [windowDim])

    return (
        <div className="flex flex-col items-center p-8">
            <button
                onClick={() => setBtn(!btn)}
                className="p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
            >
                Click Here For Funz
            </button>
            {btn && (
                <>
                    <ReactConfetti
                        width={windowDim.width}
                        height={windowDim.height}
                        tweenDuration={1000}
                    />
                    <h1 className="leading-tight text-5xl mt-0 mb-2 text-blue-600 p-8">
                        He's sooooo Poor
                    </h1>
                    <h2 className="leading-tight text-5xl mt-0 mb-2 text-blue-600 p-8">
                        Bring in the dancing lobsters
                    </h2>
                    <img src="https://media.giphy.com/media/BpLDGapjAOf5salQqm/giphy.gif" alt="" />
                    <button
                        onClick={() => navigate("/")}
                        className="p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
                    >
                        Click To Go Home
                    </button>
                </>
            )}
        </div>
    )
}
