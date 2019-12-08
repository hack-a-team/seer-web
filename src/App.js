import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MapView from './screens/MapView/MapView';

import MenuContext from './context/MenuContext';

function App() {
  const [menuOpened, setMenuOpened] = useState(true);

  return (
    <BrowserRouter>
      <MenuContext.Provider value={{ opened: menuOpened, toggleMenu: () => setMenuOpened(!menuOpened) }}>
        <Switch>
          <Route path="/map" exact component={MapView} />
          <Redirect to="/map" />
        </Switch>
      </MenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;
