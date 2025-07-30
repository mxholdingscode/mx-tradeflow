import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello').then(r => r.text()).then(setMessage);
  }, []);

  return <h1>{message || 'Loading...'}</h1>;
}
