import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Popup from './components/Popup'
import Form from './components/Form'
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
      <div className="card--container" key={card.id}>
        <Card
          {...card}
          deleteCard={deleteCard}
        />
        <hr className="card--spacer"/>
      </div>
    )
  })

  async function addCard(newCard) {
    await addDoc(cardsCollection, newCard)
  }

  async function deleteCard(cardId) {
    const docRef = doc(db, "cards", cardId)
    await deleteDoc(docRef)
  }

  function togglePopup() {
    setPopup(prevState => !prevState)
  }
  
  return (
    <>
      <Navbar 
        handleClick={togglePopup}
      />
      {cardElements}
      <Popup 
        trigger={popup} 
        close={togglePopup}>
        <Form 
          addCard={addCard}
        />
      </Popup>
    </>
  )
}

export default App