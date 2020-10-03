import React, {Component} from 'react'
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import ResultQuiz from '../../components/ResultQuiz/ResultQuiz'

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    resultState: 0,
    sumRight: 0,
    quiz: [
      {
        id: 1,
        question: 'ОАЭ',
        rightAnswerId: 3,
        userAnswerId: 0,
        answers: [
          {text: 'Дакар', id: 1},
          {text: 'Дамаск', id: 2},
          {text: 'Абу-Даби', id: 3},
          {text: 'Аддис-Абеба', id: 4}
        ]
      },
      {
        id: 2,
        question: 'Мали',
        rightAnswerId: 4,
        userAnswerId: 0,
        answers: [
          {text: 'Бастер', id: 1},
          {text: 'Загреб', id: 2},
          {text: 'Мале', id: 3},
          {text: 'Бамако', id: 4}
        ]
      },
      {
        id: 3,
        question: 'Мавритания',
        rightAnswerId: 1,
        userAnswerId: 0,
        answers: [
          {text: 'Нуакшот', id: 1},
          {text: 'Подгорица', id: 2},
          {text: 'Сент-Джонс', id: 3},
          {text: 'Тегусигальпа', id: 4}
        ]
      },
    ]
  }

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]
    //const userAnswer = this.state.quiz[this.state.activeQuestion]
    question.userAnswerId = answerId
    //if (question.rightAnswerId === answerId) {
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            resultState: +1
          })
        } else {
          if (question.rightAnswerId === answerId) {
            this.setState({
              sumRight: this.state.sumRight + 1
            })
            console.log(this.state.sumRight)
          }
          this.setState({
            activeQuestion: this.state.activeQuestion + 1
          })
        }
        window.clearTimeout(timeout)
      }, 500)
      
    //}
    
  }

  isQuizFinished () {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }  

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {this.state.resultState === 1 ? (
            <div>
              <h1>Результаты теста:</h1>
              <h2>Правильно {this.state.sumRight} из {this.state.quiz.length}</h2>
              <ResultQuiz 
                quiz={this.state.quiz}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                result={this.state.resultState}
                quizLength={this.state.quiz.length}
              />
            </div>
          ) : (
            <div>
              <h1>Выбери правильную столицу страны</h1>
              <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                id={this.state.quiz[this.state.activeQuestion].id}
                activeNumber={this.state.activeQuestion + 1}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                result={this.state.resultState}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Quiz