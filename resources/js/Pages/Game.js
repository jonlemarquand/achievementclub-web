import Layout from "../components/shared/layout";
import PageHeader from "../components/shared/pageHeader";

const Game = () => {
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
            This will be a game.
        </Layout>
    )
}

export default Game;
