import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((card) => {
    return (
      <Card 
        {...card}
      />
    )
  })
  
  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App