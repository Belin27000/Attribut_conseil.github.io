import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './Pages/Public/PublicRouter.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/attribut_conseil'>
        <Routes>
          <Route path="*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
