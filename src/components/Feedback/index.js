// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emojie from '../emojies'

class Feedback extends Component {
  render() {
    const {resources} = this.props

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul>
            {resources.map(eachCart => (
              <Emojie eachCart={eachCart} key={eachCart.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Feedback
