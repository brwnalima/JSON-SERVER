import React from 'react'
import { Button } from '../button/Button'
import './VideoSection.css'

function VideoSection() {
  return (
    <div className='video-container'>

      <video src='/video/video-2.mp4' autoPlay loop muted />
      <h1>VOCÊ TEM VOZ!</h1>
      <p>Em todos os lugares, em todos os momentos da sua vida!</p>
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
