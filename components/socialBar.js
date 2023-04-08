import React from 'react'
import { Poppins } from '@next/font/google'
import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import dribbble from '../assets/img/dribbble.svg'
import Image from 'next/image'

const poppins = Poppins({
  weight: ['400', '500', '600','700'],
  style: ['normal']
})
const SocialBar = () => {
  return (
    <div className={`social__bar ${poppins.className}`}>
      <span className="follow">Sígueme</span>
      <a href="https://linkedin.com/in/salvador-sánchez-94b251237" target="_blank" rel="noopener noreferrer"><Image width='24' className="icon" src={linkedin} alt="Icon LinkedIn" /></a>
      <a href="https://github.com/SalvasDev" target="_blank" rel="noopener noreferrer"><Image width='24' className="icon" src={github} alt="Icon Github" /></a>
      <a href="https://dribbble.com/Salvadorsanchez" target="_blank" rel="noopener noreferrer"><Image width='42' className="icon" src={dribbble} alt="Icon Dribbble" /></a>
    </div>
  )
} 
export default SocialBar
