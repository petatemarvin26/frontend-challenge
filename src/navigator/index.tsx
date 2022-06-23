import { useState } from 'react';
import { PokemonContext } from 'context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PokemonApiPropsResult } from 'hooks';

import { NavigationBar } from './components';
import routes from './routes';

const Navigator: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonApiPropsResult>(
    { name: '', url: '' }
  );

  const onSelectPokemon = (pokemon: PokemonApiPropsResult) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <PokemonContext.Provider
      value={{ selected: selectedPokemon, onSelect: onSelectPokemon }}
    >
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
          v
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  );
};

export default Navigator;
