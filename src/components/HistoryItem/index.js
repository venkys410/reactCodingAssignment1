import './index.css'

const HistoryItem = props => {
  const {list, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = list

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="history-details">
        <div className="logo-url-container">
          <img src={logoUrl} alt=" domain logo" className="app-logo" />
          <div className="app-details">
            <p className="app-title">{title}</p>
            <p className="app-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={deleteItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
