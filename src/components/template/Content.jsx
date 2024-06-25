import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'

function Content() {
  return (
    <main className="content">
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path="/contato" element={<Contact/>}></Route>
        <Route path="/produtos" element={<Products/>}></Route>
        <Route path="produtos/:id" element={<Product/>}></Route> */}
      </Routes>
    </main>
  )
}

export default Content