import SearchIcon from './searchIcon';
import './header.scss';

const Header = () => {
    return (
        <div className="nav-header">
            <SearchIcon />
            <div className="nav-header__logo-placeholder">XA</div>
            <div>=</div>
        </div>
    )
}

export default Header;
