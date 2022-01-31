import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NotFound = () => {
    return (
        <div className='my-5'>
             <h4>Page Not Found</h4>
            <h2>404</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;