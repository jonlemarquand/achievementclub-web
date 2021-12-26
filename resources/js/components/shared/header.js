import SearchIcon from './searchIcon';
import './header.scss';
import {useState} from "react";
import {Link} from "@inertiajs/inertia-react";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    }

    return (
        <div className="nav-header">
            <div className="nav-header__content">
                <SearchIcon />
                <Link className="nav-header__logo-placeholder" href="/">XA</Link>
                <div className={`nav-header__burger ${menuActive ? 'menu-active' : ''}`} onClick={handleMenuActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header;
