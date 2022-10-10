
import './App.css';
import axios from "axios";
import Header from './Container/UI/Header';
import CharacterGrid from './Container/Characters/CharacterGrid';
import { useEffect, useState } from 'react';
import { Search } from './Container/UI/Search';
import { Creditnals } from './Container/Creditnals';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query]);

  const queryFunction = (q) =>{
    setQuery(q)
  }

  return (
    <div className='container'>
      <Header />
      <Search getQuery={queryFunction} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Creditnals />
    </div>
  );
}

export default App;
