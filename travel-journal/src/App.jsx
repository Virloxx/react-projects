import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((card) => {
    return (
      <div className="card--container">
            <Card 
              {...card}
            />
            <hr className="card--spacer"/>
      </div>
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