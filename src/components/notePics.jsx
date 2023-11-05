import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const NotePics = ({pics}) => {
  const [picIdx, setPicIdx] = useState(0)

  const showPrev = () => {
    setPicIdx(idx => {
      if (idx === 0) {
        return pics.length - 1
      } else {
        return idx - 1
      }
    })
  }
  const showNext = () => {
    setPicIdx(idx => {
      if (idx === pics.length - 1) {
        return 0
      } else {
        return idx + 1
      }
    })
  }

  return (
    <div className='w-full h-full relative flex items-center overflow-hidden'>
      <div className='flex w-full h-full duration-200' style={{translate: `${-100 * picIdx}%`}}>
        {pics.map(pic => (
          <img src={pic.pic} alt={pic.alt} className='w-full h-full object-fill shrink-0' />
        ))}
      </div>
      <FontAwesomeIcon icon={faAngleLeft} onClick={showPrev}
        className='absolute left-0 cursor-pointer mx-2 text-cyan-700 px-4 py-3 hover:px-2.5 hover:py-1.5 shadow-sm shadow-gray-500 backdrop-blur-sm rounded-full hover:text-xl duration-200' />
      <FontAwesomeIcon icon={faAngleRight} onClick={showNext}
        className='absolute right-0 cursor-pointer mx-2 text-cyan-700 px-4 py-3 hover:px-2.5 hover:py-1.5 shadow-sm shadow-gray-500 backdrop-blur-sm rounded-full hover:text-xl duration-200' />
      <div className='absolute bottom-1 w-full flex justify-center gap-1.5'>
        {pics.map((_, i) => (
          <div key={i} onClick={() => setPicIdx(i)}>
            {picIdx === i ? (
              <button className='w-3 h-3 bg-cyan-900 border-2 border-cyan-500 rounded-full hover:w-3.5 hover:h-3.5 duration-200' />
            ) : (
              <button className='w-2 h-2 bg-gray-400 rounded-full hover:w-3 hover:h-3 duration-200' />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotePics
