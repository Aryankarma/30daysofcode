import styles from "../styles/components/Header.module.scss";

function Header() {
    return (
      <nav className={`navbar navbar-expand-lg bg-light ${styles.bg}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href=",">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-start ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href=",">
                  Eleven
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=",">
                  Twelve
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">
                  Thirteen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;
