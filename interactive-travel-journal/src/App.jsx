import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Popup from './components/Popup'
import { useState, useEffect } from 'react'
import { onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { cardsCollection, db } from './firebase.config'

function App() {
  const [cards, setCards] = useState([])
  const [popup, setPopup] = useState(false)

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

  const cardElements = cards.map((card) => {
    return (
      <div className="card--container">
        <Card
          {...card}
          deleteCard={deleteCard}
        />
        <hr className="card--spacer"/>
      </div>
    )
  })

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
    await addDoc(cardsCollection, newCard)
  }

  async function deleteCard(cardId) {
    const docRef = doc(db, "cards", cardId)
    await deleteDoc(docRef)
  }

  function showPopup() {
    setPopup(prevState => !prevState)
  }

  return (
    <>
      <Navbar 
        handleClick={showPopup}
      />
      {cardElements}
      <Popup 
        trigger={popup} 
        close={showPopup}>
        <h3>My popup</h3>
      </Popup>
    </>
  )
}

export default App