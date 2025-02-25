import { useEffect, useState } from 'react';

type ResponseItemType = {
  id: string;
  name: string;
};

const NamesPage = () => {
  const [names, setNames] = useState<ResponseItemType[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch the names when the component mounts
  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await fetch('/api/names');
        if (!response.ok) {
          throw new Error('Failed to fetch names');
        }
        const data: ResponseItemType[] = await response.json();
        setNames(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Something went wrong');
        }
      }
    };

    fetchNames();
  }, []);

  return (
    <div>
      <h1>Names List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {names.map((item) => (
          <li key={item.id}>
            {item.name} (ID: {item.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NamesPage;
