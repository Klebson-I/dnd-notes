import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../pages/Main/Main"

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    </BrowserRouter>
}