// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameClicked: false,
    firstName: 'hide',
    isLastNameClicked: false,
    lastName: 'hide',
  }

  onFirstName = () => {
    const {isFirstNameClicked} = this.state
    if (isFirstNameClicked) {
      return this.setState({isFirstNameClicked: false, firstName: 'hide'})
    }
    return this.setState({isFirstNameClicked: true, firstName: 'show'})
  }

  onLastName = () => {
    const {isLastNameClicked} = this.state
    if (isLastNameClicked) {
      return this.setState({isLastNameClicked: false, lastName: 'hide'})
    }
    return this.setState({isLastNameClicked: true, lastName: 'show'})
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="names-container">
          <div className="box">
            <button type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            <p className={firstName}>Joe</p>
          </div>
          <div className="box">
            <button type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            <p className={lastName}>Jonas</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
