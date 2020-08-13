import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Global from './constants/globalStyle';
import TaskWrapper from './components/AppCore/Task/TaskWrapper/TaskWrapper';

// -- Route Control -- //
function App() {
  return (
    <>
    <Global />
    <BrowserRouter basename='/'>
      <Switch>
        <Route path='/' component={TaskWrapper}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
