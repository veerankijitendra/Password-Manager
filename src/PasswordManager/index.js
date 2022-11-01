import {Component} from 'react'

import PasswordForm from '../PasswordForm'
import PasswordsList from '../PasswordsList'
import './index.css'

class PasswordManager extends Component {
  state = {passwordsList: [], arePasswordsShowable: false, searchValue: ''}

  setSearchPassword = e => {
    // this.setState({searchValue: e.target.value})
    let a = e.target.value
    a = a.toLowerCase()
    this.setState({searchValue: a})
  }

  addPassword = passwordDetails => {
    // console.log(passwordDetails)
    this.setState(previous => ({
      passwordsList: [...previous.passwordsList, passwordDetails],
    }))
  }

  isPasswordsVisible = () => {
    this.setState(previous => ({
      arePasswordsShowable: !previous.arePasswordsShowable,
    }))
  }

  deleteThePasswords = id => {
    this.setState(previous => ({
      passwordsList: previous.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  LengthOfPasswordIsZero = () => (
    <div className="zero-passwords-con">
      <div className="password-img-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
          alt="no passwords"
          className="password-image"
        />
      </div>
      <p className="no-passwords">No Passwords</p>
    </div>
  )

  LengthOfPasswordIsNotZero = (passwordsList, arePasswordsShowable) => (
    <ul className="password-list">
      {passwordsList.map(eachItem => (
        <PasswordsList
          key={eachItem.id}
          list={eachItem}
          isPasswordVisible={arePasswordsShowable}
          deleteThePasswords={this.deleteThePasswords}
        />
      ))}
    </ul>
  )

  render() {
    const {passwordsList, arePasswordsShowable, searchValue} = this.state
    const filterdPasswords = passwordsList.filter(eachItem => {
      let web = eachItem.website
      web = web.toLowerCase()
      //   console.log(web)
      return web.includes(searchValue)
    })
    // console.log(filterdPasswords)
    return (
      <div className="bg-pm">
        <nav className="pm-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="app-logo-img"
          />
        </nav>
        <div className="pw-foam-img-con">
          <PasswordForm addPassword={this.addPassword} />
          <div className="ps-img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="ps-img hide-sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="ps-img hide-lg"
            />
          </div>
        </div>

        <div className="passwords-count-search-list-con">
          <div className="password-count-search-con">
            <div className="yourPasswords">
              <h1 className="your-passwords-heading">Your Passwords</h1>
              <p className="count-of-passwords">{filterdPasswords.length}</p>
            </div>
            <div className="image-input-con">
              <div className="search-icon-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="image"
                />
              </div>
              <div className="input-ele-con">
                <input
                  type="search"
                  className="input-ele"
                  value={searchValue}
                  placeholder="Search"
                  onChange={this.setSearchPassword}
                />
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-password-list-con">
            <div className="show-password-con">
              <input
                type="checkbox"
                className="check-box"
                id="showPassword"
                onClick={this.isPasswordsVisible}
              />
              <label htmlFor="showPassword" className="show-passwords-label">
                Show Passwords
              </label>
            </div>
            {filterdPasswords.length === 0
              ? this.LengthOfPasswordIsZero()
              : this.LengthOfPasswordIsNotZero(
                  filterdPasswords,
                  arePasswordsShowable,
                )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
