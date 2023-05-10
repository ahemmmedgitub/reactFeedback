// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emojie from '../emojies'

class Feedback extends Component {
  state = {changeItem: true}

  onClickingHappy = () => {
    this.setState({changeItem: false})
  }

  render() {
    const {resources} = this.props
    const {changeItem} = this.state

    return (
      <div className="bg-container">
        {changeItem ? (
          <div className="text-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emojies-container">
              {resources.emojis.map(eachCart => (
                <Emojie
                  eachCart={eachCart}
                  onClickingHappy={this.onClickingHappy}
                  key={eachCart.id}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="happy-feedback-description">
            <img
              src={resources.loveEmojiUrl}
              alt="love emoji"
              className="hart-img"
            />
            <h1 className="happy-heading">Thank You!</h1>
            <p className="review-description">
              We will use your feedback to improve our customer care support.
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
