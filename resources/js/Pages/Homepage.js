import { Link } from '@inertiajs/inertia-react'

import Layout from '../components/shared/layout';

const Homepage = () => {
    return (
        <Layout>
            <div>
                This is the homepage
                <Link href="/game">Game</Link>
            </div>
        </Layout>
    )
}

export default Homepage;
