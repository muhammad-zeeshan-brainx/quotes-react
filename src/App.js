import { Route, Routes } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Comments from './components/comments/Comments';

function App() {
  return (
    <div>
      <h1>Welcome To Great Quotes!</h1>
      {/* <Routes>
        <Route path="" exact element={<Navigate to="/quotes" />} />
        <Route path="quotes" exact element={<AllQuotes />}></Route>
        <Route path="quotes/:quoteId" element={<QuoteDetail />}></Route>
        <Route path="/quotes/new-quote" element={<NewQuote />}></Route>
      </Routes> */}

      <Routes>
        <Route path="quotes">
          <Route path="" element={<AllQuotes />} />

          <Route path=":quoteId">
            <Route path="" element={<QuoteDetail />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="new" element={<NewQuote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
