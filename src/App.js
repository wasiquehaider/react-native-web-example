import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Router, Switch, Route} from './routing';
import Home from './Home';
import Pokemon from './Pokemon';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const selectPokemon = (selectedPokemon) => {
    setSelectedPokemon(selectedPokemon);
  };
  return (
    <View style={styles.container}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} selectPokemon={selectPokemon} />
            )}
          />
          <Route
            path="/pokemon"
            render={(props) => (
              <Pokemon {...props} selectedPokemon={selectedPokemon} />
            )}
          />
        </Switch>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50,
  },
});

export default App;
