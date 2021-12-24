import './infobox.scss';

const InfoBoxStat = ({stat, suffix, text}) => {
    return (
        <div className="infobox-stat">
            <h3 className="infobox-stat__header">{stat}<span className="infobox-stat__header--light">{suffix}</span></h3>
            <p className="infobox-stat__text">{text}</p>
        </div>
    )
}

export default InfoBoxStat;
