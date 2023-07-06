import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ search, setSearch }) => {
    return (
        <div className='App'>
            <Header title='React js blog' />
            <Nav
                search={search}
                setSearch={setSearch}
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;