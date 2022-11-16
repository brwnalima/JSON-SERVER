import React from 'react'
import { Button } from './Button'
import './VideoSection.css'

function VideoSection() {
  return (
    <div className='video-container'>

      <video src='/video/video-2.mp4' autoPlay loop muted />
      <h1>LOREM IPSUM IPSUM </h1>
      <p>Ab dolores dolores est saepe quia nam?</p>
      <div className="video-btns">
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          INSCREVA-SE
        </Button>

        <Button className='btns'
          buttonSize='btn--large'>
          CURSOS DISPONÍVEIS <i className='far fa-play-circle' />
        </Button>

      </div>

    </div>
  )
}

export default VideoSection
