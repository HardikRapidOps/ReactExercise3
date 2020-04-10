import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
// import RefsDemo from './components/RefsDemo';
// import Ex3Parent from './components/Ex3Parent';
// import Ex3Child from './components/Ex3Child';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <RefsDemo /> */}
      {/* <Counter /> */}
      {/* <Ex3Parent /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      <UserProvider value="Hardik">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
