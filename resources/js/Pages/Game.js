import Layout from "../components/shared/layout";
import PageHeader from "../components/shared/pageHeader";
import Infobox from "../components/shared/infobox";
import {useState} from "react";

const Game = () => {

    const [stats, setStats] = useState([
        {stat: "960", suffix: "G", text: "36 out of 52 Achievements Unlocked"},
        {stat: "36", text: "36 hours played"},
        {stat: "32", suffix: "%", text: "You are in the top 32% of Gamers"}
    ])

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
            This will be a game.
        </Layout>
    )
}

export default Game;
