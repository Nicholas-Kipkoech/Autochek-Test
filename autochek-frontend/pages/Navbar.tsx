const Nav = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://media.autochek.africa/file/publicAssets/full-color-logo-new.png"
            alt=""
            width="150"
            height="40"
            className="d-inline-block align-text-top"
          />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
