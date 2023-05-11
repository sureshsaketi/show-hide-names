// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameClicked: false,
    className1: 'name-block',
    firstName: 'Joe',
    isLastNameClicked: false,
    lastName: 'Jonas',
    className2: 'name-block',
  }

  onFirstName = () => {
    const {isFirstNameClicked} = this.state
    if (isFirstNameClicked) {
      return this.setState({
        isFirstNameClicked: false,
        firstName: null,
        className1: null,
      })
    }
    return this.setState({
      isFirstNameClicked: true,
      firstName: 'Joe',
      className1: 'name-block',
    })
  }

  onLastName = () => {
    const {isLastNameClicked} = this.state
    if (isLastNameClicked) {
      return this.setState({
        isLastNameClicked: false,
        lastName: null,
        className2: null,
      })
    }
    return this.setState({
      isLastNameClicked: true,
      lastName: 'Jonas',
      className2: 'name-block',
    })
  }

  render() {
    const {firstName, lastName, className1, className2} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="names-container">
          <div className="box">
            <button type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            <p className={className1}>{firstName}</p>
          </div>
          <div className="box">
            <button type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            <p className={className2}>{lastName}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
