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
      title: prompt("Enter place:"),
      location: prompt("Enter country:"),
      googleMapsUrl: prompt("Enter Google Maps URL:"),
      startDate: prompt("Enter start date:"),
      endDate: prompt("Enter end date:"),
      description: prompt("Enter description:"),
      imageUrl: prompt("Enter an image URL:")
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