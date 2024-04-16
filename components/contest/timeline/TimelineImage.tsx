import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface IProps {
  src:string | StaticImageData
  alt:string
  isMobile?: boolean
  inversed?: boolean
}

function TimelineImage({src, alt, isMobile, inversed}: IProps) {
  return (
    <div className='w-1/2 z-20'>
      <Image src={src} alt={alt} 
      className='z-20
      {
        inversed?
        mr-0
        :
        left-0
      }'>

      </Image>
    </div>
  )
}

export default TimelineImage