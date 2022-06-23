import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages';

const Navigator: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
