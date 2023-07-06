import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='Missing'>
            <h2>Not Found</h2>
            <p>
                <Link to='/'>Go Home</Link>
            </p>
        </main>
    )
}

export default NotFound;