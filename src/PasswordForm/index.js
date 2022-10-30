import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordForm extends Component {
  state = {website: '', username: '', password: ''}

  addPassword = e => {
    const {addPassword} = this.props
    const {username, website, password} = this.state

    const passwordDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    e.preventDefault()
    addPassword(passwordDetails)
    this.setState({username: '', password: '', website: ''})
  }

  setWebsiteName = e => {
    this.setState({website: e.target.value})
  }

  setUsername = e => {
    this.setState({username: e.target.value})
  }

  setPassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {website, username, password} = this.state
    return (
      <form className="foam-con" onSubmit={this.addPassword}>
        <h1 className="add-new-password-heading">Add New Password</h1>
        <div className="image-input-con">
          <div className="search-icon-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="image"
            />
          </div>
          <div className="input-ele-con">
            <input
              type="text"
              className="input-ele"
              value={website}
              placeholder="Enter Website"
              onChange={this.setWebsiteName}
            />
          </div>
        </div>

        <div className="image-input-con">
          <div className="search-icon-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="image"
            />
          </div>
          <div className="input-ele-con">
            <input
              type="text"
              className="input-ele"
              value={username}
              placeholder="Enter Username"
              onChange={this.setUsername}
            />
          </div>
        </div>
        <div className="image-input-con">
          <div className="search-icon-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="image"
            />
          </div>
          <div className="input-ele-con">
            <input
              type="password"
              className="input-ele"
              value={password}
              placeholder="Enter Password"
              onChange={this.setPassword}
            />
          </div>
        </div>

        <button type="submit" className="button">
          Add
        </button>
      </form>
    )
  }
}

export default PasswordForm
