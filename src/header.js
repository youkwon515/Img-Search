import './styles.css';

function Header() {
    return (
        <header>
            <div className="logo">LOGO</div>
            <nav>
                <ul>
                    <li>
                        <a href="#">menu1</a>
                    </li>
                    <li>
                        <a href="#">menu2</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;