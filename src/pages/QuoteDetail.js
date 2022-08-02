import { useParams } from 'react-router-dom';

const Quote = () => {
  const params = useParams();
  return (
    <div>
      <h2>Quote Detail Page</h2>
      <p>{params.quoteId}</p>
    </div>
  );
};

export default Quote;
