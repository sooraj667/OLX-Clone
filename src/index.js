import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContext} from './store/Contexts'
import Context from './store/Contexts'
import firebase from './firebase/config';
ReactDOM.render(

<firebaseContext.Provider value={{firebase}}>
<Context>
<App />
</Context>
</firebaseContext.Provider>
, document.getElementById('root')
);
