import './Header.css'

const Header = (props) => {
    return (
       <header>
            <div className='logo'>
                <img id='logo-site' src='images/logo.png' alt='logo Athena.dev'/>
                <h1 id='titulo-logo'>Athena.dev</h1>
            </div>
            <nav className='menu'>
                <ul className='lista-menu'>
                    <li><a href='https://google.com' target='_blank'>Desafios</a></li>
                    <li><a>Jogos</a></li>
                    <li><a>Recursos</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
       </header>
    )
}

export default Header