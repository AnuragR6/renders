import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // No need for the full URL; Vite will handle the proxy for '/api'
    axios.get('https://hi-n6ax.onrender.com/api/data')
      .then((response) => setData(response.data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>{data || 'Loading...'}</h1>
    </div>
  );
}

export default App;
