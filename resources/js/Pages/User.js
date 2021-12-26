import Layout from "../components/shared/layout";
import PageHeader from "../components/shared/pageHeader";
import {useState} from "react";
import Infobox from "../components/shared/infobox";
import AchievementCard from "../components/shared/achievementCard";

const User = ({ user, games }) => {

    const [stats, setStats] = useState([
        {stat: "960", suffix: "G", text: "36 out of 52 Achievements Unlocked"},
        {stat: "36", text: "36 hours played"},
        {stat: "32", suffix: "%", text: "You are in the top 32% of Gamers"}
    ]);

    let gamesDisplay = games.map(game => {
        return (
            <AchievementCard
                type={"game"}
                name={game.name}
                completed={game.completed}
                text={game.text}
                score={game.overall_gamerscore}
                percentage={game.percentage}
                date={game.date}
                time={game.time}
                link={game.link}
                image={game.cover_image}
            />
        )
    })

    return (
        <Layout>
            <PageHeader
                title={user.username}
                subtitle={"User"}
            >
                <p>Last Refreshed: Today</p>
            </PageHeader>
            <Infobox
                title={"Your stats:"}
                stats={stats}
            />
            {gamesDisplay}
        </Layout>
    )
}

export default User;
