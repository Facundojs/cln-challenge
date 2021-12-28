const Header = () => {
  return (
    <header className='header wrapper'>
      <nav className="wrapper header-wrapper">

        <div className="nav nav-1">
          <i className="fas fa-bars clickeable"></i>
          <i className="fab fa-cuttlefish clickeable"></i>
        </div>

        <div className="nav">
          <div className="inputs-wrapper">
            <input type="text" className="is-l" placeholder="Busca un comercio..."/>
            <input type="text" className="is-r" placeholder="Ingresa una ubicación..."/>
          </div>
          <button className="search-button">
            <i className="fas fa-search clickeable"></i>
          </button>
        </div>

        <div className="nav nav-3">
          <i className="far fa-bell clickeable"></i>
          <i className="far fa-heart clickeable"></i>
          <i className="fas fa-smile clickeable smile-icon"></i>
        </div>

      </nav>

    </header>
  )
}

export default Header;