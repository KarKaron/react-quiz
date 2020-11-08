import React from 'react'
import classes from './AnswerItem.scss'

const AnswerItem1 = props => {

  let color = classes.AnswerItem1
  
  if (props.color === 'green') {
    color = classes.AnswerItemRight
  }

  if (props.color === 'red') {
    color = classes.AnswerItemWrong
  }

  return (
    <li 
      className={color}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem1