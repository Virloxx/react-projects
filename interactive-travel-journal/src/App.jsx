import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import { useState, useEffect } from 'react'
import { onSnapshot, addDoc } from 'firebase/firestore'
import { cardsCollection } from './firebase'

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

  useEffect(() => {
    const unsubscribe = onSnapshot(cardsCollection, (snapshot) => {
      const cardsArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setCards(cardsArr)
    })
    return () => unsubscribe()
  }, [])

  async function addCard() {
    const newCard = {
      title: prompt("Enter place:"),
      location: prompt("Enter country:"),
      googleMapsUrl: prompt("Enter Google Maps URL:"),
      startDate: prompt("Enter start date:"),
      endDate: prompt("Enter end date:"),
      description: prompt("Enter description:"),
      imageUrl: prompt("Enter an image URL:")
    }
    const newCardRef = await addDoc(cardsCollection, newCard)
    // setCards(prevState => [...prevState, newCard])
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