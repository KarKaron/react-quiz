import React from 'react'
import classes from '../ActiveQuiz/ActiveQuiz.scss'
import classes1 from '../../containers/Quiz/Quiz.scss'
import AnswerList from '../AnswersList/AnswersList'

const ResultQuiz = props => (

  <div className={classes1.QuizWrapper}>
    { 
      props.quiz.map((item, index) => {
        return (
          <div key={index} className={classes.ActiveQuiz}>          
            <p className={classes.Question}>
              <span>
                <strong>{index+1}.</strong>&nbsp;
                {item.question}
              </span>
            </p>

            <AnswerList
              rightAnswerId={item.rightAnswerId}
              userAnswerId={item.userAnswerId}     
              answers={item.answers}
              result={props.result}
            />
          </div>
        )
      })
    }
    <button 
      className={classes.RetryButton} 
      onClick={props.retryQuiz}
    >
      Пройти тест еще раз
    </button>
  </div>
)

export default ResultQuiz