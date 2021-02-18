import './Appheader.css'
import React from 'react'
import headerImage from '../assets/rickmorty.png'

export default function Appheader() {
  return (
    <header className="Appheader">
      <img src={headerImage} alt="" />
    </header>
  )
}
