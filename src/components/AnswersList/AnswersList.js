import React from 'react'
import classes from './AnswersList.scss'
import AnswerItem from './AnswerItem/AnswerItem'
import AnswerItem1 from './AnswerItem/AnswerItem1'

const AnswersList = props => {

  let color = '';
  const {rightAnswerId, userAnswerId} = props;

  return (
    <ul className={classes.AnswersList}>
      { 
        props.answers.map((item, index) => {
          if (props.result !== 1) {
            return (
              <AnswerItem 
                key={index}
                answer={item}
                onAnswerClick={props.onAnswerClick}
                result={props.result}          
              />
            )
          } else {
            if (rightAnswerId === userAnswerId) {
              if (rightAnswerId === item.id) {
                color = 'green';
              } else {
                color = '';
              }
            } else {
              if (userAnswerId === item.id) {
                color = 'red';
              } else if (rightAnswerId === item.id) {
                color = 'green';
              } else {
                color = '';
              }
            }
            return (
              <AnswerItem1 
                key={index}
                color={color}
                answer={item}
                result={props.result}          
              />
            )  
          }
        }) 
      }
    </ul>
  )
}

export default AnswersList