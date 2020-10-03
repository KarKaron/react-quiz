import React from 'react'
import classes from './ActiveQuiz.scss'
import AnswerList from '../AnswersList/AnswersList'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.activeNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.id} из {props.quizLength}</small>
    </p>

    <AnswerList 
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      result={props.result}
    />
  </div>
)

export default ActiveQuiz