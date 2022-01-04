import { useState, useEffect } from 'react'
import './index.css'

function App() {

  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  const colorGenerator = () => {
    let hexa = '#'
    const randomElements = ['A', 'B', 'C', 'D', 'E', 'F','0','1','2','3','4','5','6','7','8','9']
    for (let i = 0; i<6; i++ ){
      const randomElement = randomElements[Math.floor(Math.random()*randomElements.length)];
      hexa += randomElement 
    }
    setColor(hexa)
  }

  const style ={
    backgroundColor: color
  }

  useEffect(()=>{
    colorGenerator()
  },[count])

  return (
    <div style={style}>
      <div className='centrar-boton'>
        <p>
          <button 
            className='boton'
            type="button" 
            onClick={() => setCount((count) => count + 1)}>
            contador: {count}
          </button>
        </p>
      </div>
    </div>
  )
}

export default App
