import React from 'react'
import classes from '../ActiveQuiz/ActiveQuiz.scss'
import classes1 from '../../containers/Quiz/Quiz.scss'
import AnswerList from '../AnswersList/AnswersList'

const ResultQuiz = props => (
  <div className={classes1.QuizWrapper}>
    { props.quiz.map((answers, index) => {
      return (
        <div key={index} className={classes.ActiveQuiz}>          
          <p className={classes.Question}>
            <span>
              <strong>{index+1}.</strong>&nbsp;
              {answers.question}
            </span>
          </p>

          <AnswerList            
            answers={answers.answers}
            result={props.result}
          />
        </div>
      )
    }) }
  </div>
)

export default ResultQuiz