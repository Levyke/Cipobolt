import '../App.css'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
            <div className="page">
                <nav>
                    <img src="img/logo.png" alt="" />
                    <Link to="/">Főoldal</Link>
                    <Link to="/newCipo">Új cipő</Link>
                    <Link to="/newMarka">Új márka</Link>
                </nav>
                <header></header>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout