import React, {Component} from 'react'
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import ResultQuiz from '../../components/ResultQuiz/ResultQuiz'

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    resultState: 1,
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
      {
        id: 4,
        question: 'Нигерия',
        rightAnswerId: 3,
        userAnswerId: 0,
        answers: [
          {text: 'Шри-Джаяварденепура-Котте', id: 1},
          {text: 'София', id: 2},
          {text: 'Абуджа', id: 3},
          {text: 'Багдад', id: 4}
        ]
      },
      {
        id: 5,
        question: 'Лихтенштейн',
        rightAnswerId: 2,
        userAnswerId: 0,
        answers: [
          {text: 'Веллингтон', id: 1},
          {text: 'Вадуц', id: 2},
          {text: 'Каракас', id: 3},
          {text: 'Манила', id: 4}
        ]
      },
      {
        id: 6,
        question: 'Беларусь',
        rightAnswerId: 3,
        userAnswerId: 0,
        answers: [
          {text: 'Бишкек', id: 1},
          {text: 'Кишинев', id: 2},
          {text: 'Минск', id: 3},
          {text: 'Рига', id: 4}
        ]
      },
      {
        id: 7,
        question: 'Италия',
        rightAnswerId: 3,
        userAnswerId: 0,
        answers: [
          {text: 'Сан-Сальвадор', id: 1},
          {text: 'Москва', id: 2},
          {text: 'Рим', id: 3},
          {text: 'Рига', id: 4}
        ]
      },
      {
        id: 8,
        question: 'Колумбия',
        rightAnswerId: 1,
        userAnswerId: 0,
        answers: [
          {text: 'Санта-Фе-Де-Богота', id: 1},
          {text: 'Сан-Марино', id: 2},
          {text: 'Сан-Сальвадор', id: 3},
          {text: 'Санто-Доминго', id: 4}
        ]
      },
      {
        id: 9,
        question: 'Болгария',
        rightAnswerId: 2,
        userAnswerId: 0,
        answers: [
          {text: 'Скопье', id: 1},
          {text: 'София', id: 2},
          {text: 'Сува', id: 3},
          {text: 'Рейкьявик', id: 4}
        ]
      },
      {
        id: 10,
        question: 'Лаос',
        rightAnswerId: 3,
        userAnswerId: 0,
        answers: [
          {text: 'Ханой', id: 1},
          {text: 'Пномпень', id: 2},
          {text: 'Вьентьян', id: 3},
          {text: 'Пекин', id: 4}
        ]
      },
    ]
  }

  

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]
    question.userAnswerId = answerId
    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        if (question.rightAnswerId === answerId) {
          this.setState({
            sumRight: this.state.sumRight + 1
          })
          console.log(this.state.sumRight)
        }
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
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }  

  handlerRetryQuiz = () => {
    this.setState({
      activeQuestion: 0,
      resultState: 0,
      sumRight: 0,
    })
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
                retryQuiz={this.handlerRetryQuiz}
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