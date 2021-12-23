import './pageHeader.scss';

const PageHeader = ({ children, title, subtitle }) => {
    return (
        <div className="page-header">
            <img className="page-header__img" src="" alt="Yakuza: Like a Dragon"/>
            <div className="page-header__subtitle">{subtitle}</div>
            <h1 className="page-header__title">{title}</h1>
            <div className="page-header__details">{children}</div>
        </div>
    )
}

export default PageHeader;
