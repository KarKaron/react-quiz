import React from 'react'
import classes from './AnswerItem.scss'

const AnswerItem1 = props => {
  return (
    <li 
      className={classes.AnswerItem1}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem1