import Link from 'next/link'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                    Home
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" href="/about">
                            About
                            </Link>
                            <Link className="nav-link" href="/services">
                            Services
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navigation;
