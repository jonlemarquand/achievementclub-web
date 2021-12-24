import './infobox.scss';
import InfoBoxStat from "./infoboxStat";

const Infobox = ({title, stats}) => {
    let showStats = stats ? stats.map(stat => {
        return (
            <InfoBoxStat
                stat={stat.stat}
                suffix={stat.suffix}
                text={stat.text}
            />
        )
    }) : '';
    return (
        <div className="infobox">
            <h2 className="infobox__title">{title}</h2>
            <div className="infobox__stats">
                {showStats}
            </div>
        </div>
    )
}

export default Infobox;
