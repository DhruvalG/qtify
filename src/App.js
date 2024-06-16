import React, { useEffect, useState} from 'react'
import { NavBar } from './components';
import { fetchTopAlbums} from './api/api';
const App = () => {
  const [dataTopAlbums, setDataTopAlbums] = useState([]);

  const getDataTopAlbums = async () => {
    try {
      const res = await fetchTopAlbums();
      setDataTopAlbums(res);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataTopAlbums();
  }, [])

  return (
    <div>
      <NavBar data={dataTopAlbums} />
    </div>
  )
}

export default App;



