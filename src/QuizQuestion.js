import React, {Component} from 'react'

class QuizQuesion extends Component {
	render(props) {
		return (
			<main>
				<section>
				  <p>{this.props.quiz_question.instruction_text}</p>
				</section>
				<section className="buttons">
				  <ul>
				    <li>{this.props.quiz_question.answer_options[0]}</li>
				  </ul>
				</section>
			</main>
		)
	}
}

export default QuizQuesion