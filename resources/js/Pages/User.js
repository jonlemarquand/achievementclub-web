import Layout from "../components/shared/layout";
import PageHeader from "../components/shared/pageHeader";
import {useState} from "react";
import Infobox from "../components/shared/infobox";
import AchievementCard from "../components/shared/achievementCard";

const User = () => {

    const [stats, setStats] = useState([
        {stat: "960", suffix: "G", text: "36 out of 52 Achievements Unlocked"},
        {stat: "36", text: "36 hours played"},
        {stat: "32", suffix: "%", text: "You are in the top 32% of Gamers"}
    ]);

    const [games, setGames] = useState([
        {
            name: "Halo 3",
            completed: true,
            text: "Changed all four party members to jobs different from their default jobs and won a battle.",
            score: "90G",
            percentage: "77",
            date: "24th Jan 2021",
            time: "11:39AM",
            link: "/game"
        },
        {
            name: "Like a Boss",
            completed: false,
            text: "Changed all four party members to jobs different from their default jobs and won a battle.",
            score: "90G",
            percentage: "77",
            link: "/game"
        },
        {
            name: "Like a Boss",
            completed: false,
            text: "Changed all four party members to jobs different from their default jobs and won a battle.",
            score: "90G",
            percentage: "77",
            link: "/game"
        }
    ]);

    let gamesDisplay = games.map(game => {
        return (
            <AchievementCard
                type={"game"}
                name={game.name}
                completed={game.completed}
                text={game.text}
                score={game.score}
                percentage={game.percentage}
                date={game.date}
                time={game.time}
                link={game.link}
            />
        )
    })

    return (
        <Layout>
            <PageHeader
                title={"Azureus Xero"}
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
