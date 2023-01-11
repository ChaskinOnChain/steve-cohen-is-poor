import React from "react"
import { useNavigate } from "react-router-dom"
import GameOver from "../images/gameover.jpg"

export default function HisStory() {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col items-center p-8">
                <h1 className="leading-tight text-5xl mt-0 mb-2 text-blue-600 p-8">
                    Steve's Story:
                </h1>
                <p className="mb-3 text-black font-dark text-gray-500 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-black first-letter:mr-3 first-letter:float-left">
                    Once upon a time, Steve Cohen was a billionaire hedge fund manager, and owner of
                    the New York Mets. But his plan to short GameStop stocks backfired when a group
                    of amateur traders on a Reddit forum banded together to drive up the stock
                    price.
                </p>
                <p className="font-dark text-black text-gray-500 ">
                    Steve, in a last-ditch effort, tried to salvage his investments by buying a
                    cursed cursed baseball bat at a garage sale, believing it would bring good luck
                    to his team and his stocks. Unfortunately, not only did the curse cause the Mets
                    to lose every game, but it also caused all of his other investments to plummet
                    as well. Now penniless, he could only afford to sign a team of misfit mascots as
                    free agents. He tried to sell peanuts at the game to make ends meet but that
                    didn't work out. In the end, he was left to be a lonely hotdog vendor outside of
                    the stadium, watching the games through the fence, rueing the day he ever got
                    involved in the GameStop madness and the cursed bat.
                </p>
                <button
                    onClick={() => navigate("/verypoor")}
                    className="p-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mb-2"
                >
                    But That's Not All, Click Here For More
                </button>
                <img className="w-2/5" src={GameOver} alt="" />
            </div>
        </>
    )
}
