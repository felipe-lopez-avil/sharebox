import React, { useContext } from 'react'
import { FirebaseContext } from '../firebase'
import Router from 'next/router'



const about = () => {
    const { user, firebase } = useContext(FirebaseContext);
    return (
        <div>
            <h1>Mi cuenta</h1>
            <h2>Hola {user.displayName} </h2>
            <button
                onClick={() => {
                    firebase.logout();
                    Router.push('/');
                }}
            >Cerrar sesión</button>
        </div>
    )
}

export default about
