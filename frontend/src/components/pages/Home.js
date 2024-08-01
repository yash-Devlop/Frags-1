import React from 'react'
import Carousel from '../utils/Carousel'
import ItemSection from '../utils/ItemSection'

function Home() {

  const images = [
    '/assets/c-1-fixed.png?text=Slide+1',
    '/assets/c-2-fixed.png?text=Slide+2',
    '/assets/c-3-fixed.png?text=Slide+3',
    '/assets/c-4-fixed.png?text=Slide+4'
  ]

  return (
    <div className = 'w-cut-10 mx-auto my-2 bg-white'>
    <div>
    <Carousel images= {images} />
    </div>
    <ItemSection />
    </div>
  )
}

export default Home
