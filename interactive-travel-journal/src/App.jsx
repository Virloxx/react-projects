import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import { useState } from 'react'

function App() {
  const [cards, setCards] = useState(data)

  const cardElements = cards.map((card) => {
    return (
      <div className="card--container">
        <Card
          {...card}
        />
        <hr className="card--spacer"/>
      </div>
    )
  })

  function addCard() {
    const newCard = {
      title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://maps.app.goo.gl/aC4XKC68csaxVpa38",
      startDate: "12 Jan 2021",
      endDate: "24 Jan 2021",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "https://images.unsplash.com/photo-1564083573637-ec42bdf05148?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    setCards(prevState => [...prevState, newCard])
  }

  return (
    <>
      <Navbar 
        handleClick={addCard}
      />
      {cardElements}
    </>
  )
}

export default App