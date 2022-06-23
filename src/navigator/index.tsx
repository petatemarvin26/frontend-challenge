import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages';
import { View } from 'components';

import { NavigationBar } from './components';

const Navigator: React.FC = () => {
  return (
    <View>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </View>
  );
};

export default Navigator;
