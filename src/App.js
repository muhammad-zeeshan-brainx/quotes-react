import { Route, Routes } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <div>
      <h1>Welcome To Great Quotes!</h1>
      <Routes>
        <Route path="/quotes" exact element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteId" element={<QuoteDetail />}></Route>
        <Route path="/quotes/new-quote" element={<NewQuote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
