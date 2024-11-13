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
        }
        const data = await res.json();
        setJoke(data.joke);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[--background]">
      <div className="p-4 bg-blue-100 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2">Random Joke</h2>
        <p>{joke}</p>
      </div>
    </div>
  );
};

export default Joke;
