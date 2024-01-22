import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loading from './Loading';


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <>
        <Loading />
    </>
);
setTimeout( () => {
    root.render(
        <>
            <App />
        </>
    );
}, 4000 );

