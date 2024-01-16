import React from 'react';
import './PageStyle.scss'

const PageStyle = ({children}) => {
  return (
    <div className='page__style'>
        {children}
    </div>
  )
}
const BoxStyle = ({children}) => {
  return (
    <div className='box__style'>
        {children}
    </div>
  )
}



export {PageStyle,BoxStyle}