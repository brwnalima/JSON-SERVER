import React from 'react'
import { Button } from './Button'

function VideoSection() {
  return (
    <div className='video-container'>

      <video src='/' autoPlay loop muted />
      <h1>LOREM IPSUM IPSUM LOREM</h1>
      <p>Lorem ipsum dolor sit amet. Ab dolores dolores est saepe quia nam?</p>
      <div className="video-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
      </div>

    </div>
  )
}

export default VideoSection
