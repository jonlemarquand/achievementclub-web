import SearchIcon from './searchIcon';
import './header.scss';
import {useState} from "react";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    }

    return (
        <div className="nav-header">
            <SearchIcon />
            <div className="nav-header__logo-placeholder">XA</div>
            <div className={`nav-header__burger ${menuActive ? 'menu-active' : ''}`} onClick={handleMenuActive}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header;
