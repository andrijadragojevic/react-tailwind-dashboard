import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main'

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Main />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router