import React from 'react';
import { View, Text, Button } from "react-native";
import Home from "./src/screens/Home"
import { Provider } from "react-redux"
import { Store } from "./src/redux/Store"



const App = () => {

  return (
    <Provider store={Store}>
      <Home />
    </Provider>

  );
};



export default App;
