import './index.css'

const PasswordsList = props => {
  const {list, isPasswordVisible, deleteThePasswords} = props
  const {id, username, password, website} = list

  const deletePassword = () => {
    deleteThePasswords(id)
  }

  const colorChange = `initial-name-con color-${1}`

  return (
    <li className="pw-list">
      <div className={colorChange}>
        <p className="initial-name">{website[0].toUpperCase()}</p>
      </div>
      <div className="names-con">
        <p className="names">{website}</p>
        <p className="names">{username}</p>
        {isPasswordVisible && <p className="names">{password}</p>}
        {!isPasswordVisible && (
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          </p>
        )}
      </div>
      <button
        testid="delete"
        type="button"
        className="dlt-con"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

PasswordsList.defaultProps = {
  list: {
    id: 1,
    username: 'jitendra',
    password: 'veeranki',
    website: 'google.com',
  },
  isPasswordVisible: false,
}

export default PasswordsList
