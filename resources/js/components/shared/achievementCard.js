import './achievementCard.scss';

const AchievementCard = ({name, completed, type, date, time, score, text, percentage}) => {
    return (
        <div className="achievement-card">
            {completed && <div className="achievement-card__background"></div>}
            <img className={`achievement-card__img ${completed ? "completed" : ''}`} alt={name}/>
            <div className="achievement-card__text-column">
                <h2 className={`achievement-card__title ${completed ? "completed" : ''}`}>{name}</h2>
                <div className="achievement-card__text">{text}</div>
            </div>
            <div className="achievement-card__score">
                <p className={`achievement-card__achievement ${completed ? "completed" : ''}`}>{score}</p>
                <p className="achievement-card__percentage">{percentage}%</p>
                {completed && <>
                    <p className="achievement-card__unlocked">{date}</p>
                    <p className="achievement-card__unlocked">{time}</p>
                </>}
            </div>
        </div>
    )
}

export default AchievementCard;
