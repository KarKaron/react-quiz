import React from 'react'
import classes from './AnswersList.scss'
import AnswerItem from './AnswerItem/AnswerItem'
import AnswerItem1 from './AnswerItem/AnswerItem1'

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    { props.answers.map((answer, index) => {
      if (props.result !== 1) {
        return (
          <AnswerItem 
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            result={props.result}          
          />
        )
      } else {
        return (
          <AnswerItem1 
            key={index}
            answer={answer}
            result={props.result}          
          />
        )  
      }
    }) }
  </ul>
)

export default AnswersList