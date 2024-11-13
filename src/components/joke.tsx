import React, { useState, useEffect } from 'react'; 

const Joke: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const res = await fetch('/api/jokes'); 
        if (!res.ok) {
          throw new Error('Failed to fetch joke');
        };
        const data = await res.json();
        setJoke(data.joke);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        };
      } finally {
        setLoading(false);
      };
    };

    fetchJoke();
  }, []);

  const handleNewJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/jokes'); 
      if (!res.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await res.json();
      setJoke(data.joke);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      };
    } finally {
      setLoading(false);
    };
  };

  if (loading) { return <p>Loading...</p>; };
  if (error) { return <p>{error}</p>; };

  return (
    <div className="text-[--textDark] p-4 bg-blue-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">Random Joke</h2>
      <p>{joke}</p>
      <button onClick={handleNewJoke} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button>
    </div>
  );
};

export default Joke;