import Layout from "../components/shared/layout";
import PageHeader from "../components/shared/pageHeader";
import Infobox from "../components/shared/infobox";
import {useState} from "react";
import AchievementCard from "../components/shared/achievementCard";

const Game = () => {

    const [stats, setStats] = useState([
        {stat: "960", suffix: "G", text: "36 out of 52 Achievements Unlocked"},
        {stat: "36", text: "36 hours played"},
        {stat: "32", suffix: "%", text: "You are in the top 32% of Gamers"}
    ]);

    const [games, setGames] = useState([
        {
            name: "Soap on a Rope",
            completed: true,
            text: "Changed all four party members to jobs different from their default jobs and won a battle.",
            score: "90G",
            percentage: "77",
            date: "24th Jan 2021",
            time: "11:39AM"
        },
        {
            name: "Like a Boss",
            completed: false,
            text: "Changed all four party members to jobs different from their default jobs and won a battle.",
            score: "90G",
            percentage: "77",
        }
    ]);

    let achievementCards = games.map(game => {
        return (
            <AchievementCard
                type={"achievement"}
                name={game.name}
                completed={game.completed}
                text={game.text}
                score={game.score}
                percentage={game.percentage}
                date={game.date}
                time={game.time}
            />
        )
    })

    return (
        <Layout>
            <PageHeader
                title={"Yakuza: Like a Dragon"}
                subtitle={"Game"}
            >
                <p>Released: Jan 2020 (Japan), Nov 2020 (Worldwide)</p>
                <p>Developer: Ryu ga Gotoku Studios</p>
                <p>Publisher: Sega</p>
            </PageHeader>
            <Infobox
                title={"Your achievements"}
                stats={stats}
            />
            {achievementCards}
        </Layout>
    )
}

export default Game;
