import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="zttmovie-nav-content">
                    <h1>ZTTMovie</h1>
                    <a href="https://github.com/pedroacbg">
                        <div className='zttmovie-contact-container'>
                            <GithubIcon />
                            <p className='zttmovie-contact-link'>/pedroacbg</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;