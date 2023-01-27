import { useState } from 'react'

import './App.css'
import { Box, Stack, VStack, HStack, Text, Heading, Button } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'
//stype props can easily be passed directly into the components. m = margin, maxW = maximumam width, bg = background , color for color
// Pseudo style prop. to call a prop, just add '_' before the prop. and its an object. line 15
function App() {
  const [count, setCount] = useState(0)

  return (              // Stack with direction doesn't center in any direction. VStack and HStack centers boxes by default
    <div className="App">
      <Header />
      <Pricing />
      <Features />



    </div>
  )
}

export default App
