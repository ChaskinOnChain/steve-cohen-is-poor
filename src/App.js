import React from "react"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import HisStory from "./components/HisStory"
import VeryPoor from "./components/VeryPoor"
import HesBroke from "./components/HesBroke"

function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/story" element={<HisStory />} />
                    <Route path="/verypoor" element={<VeryPoor />} />
                    <Route path="/hesbroke" element={<HesBroke />} />
                </Routes>
            </Header>
        </BrowserRouter>
    )
}

export default App
