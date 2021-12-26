import { Link } from '@inertiajs/inertia-react'

import Layout from '../components/shared/layout';

const Homepage = ({users}) => {
    return (
        <Layout>
            <div>
                This is the homepage
                <Link href="/game">Game</Link>
            </div>
            <ul>
                { users.map(user => {
                    return (
                        <Link href={`/user/${user.username}`}>
                            <li>{user.username}</li>
                        </Link>
                    )
                })}

            </ul>
        </Layout>
    )
}

export default Homepage;
