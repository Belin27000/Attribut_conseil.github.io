import { pdfjs } from 'react-pdf';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PublicRouter from './Pages/Public/PublicRouter.js';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
