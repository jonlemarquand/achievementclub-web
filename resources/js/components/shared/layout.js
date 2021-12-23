import Header from './header';

import './layout.scss';

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        </>
    )
}

export default Layout;
