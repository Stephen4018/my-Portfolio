import React from 'react'
import {BsTwitter, BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';




const SocialMedia = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/ stephen-ohaeri-6a89261a3"><BsLinkedin /> </a>
    <a href="https://www.GitHub.com/Stephen4018"> <BsGithub /> </a>
    <a href="https://twitter.com/Stephenjaspers"> <BsTwitter /> </a>
    <a href="https://www.facebook.com/profile.php?id=100077800638389"> <BsFacebook /> </a>
    </div>
  )
}

export default SocialMedia