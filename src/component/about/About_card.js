import React from 'react'
import './about.scss'



const About_card = (props) => {
  return (
    <div className='about__card'>
        <article className='about_icon'>{props.icon}</article>
        <h4>{props.id}</h4>
        <small>{props.text}</small>
    </div>
  )
}

export default About_card