import React, { useEffect, useState} from 'react'
import { HeroSection, NavBar, AlbumPlaylistGrids, SongsSectionDivider } from './components';
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from './api/api';
const App = () => {
  const [dataTopAlbums, setDataTopAlbums] = useState([]);
  const [dataNewAlbum, setDataNewAlbum] = useState([]);
  const [dataSong, setDataSong] = useState([]);
  const getDataTopAlbums = async () => {
    try {
      const res = await fetchTopAlbums();
      setDataTopAlbums(res);
    } catch (error) {
      console.error(error)
    }
  }
  const getDataNewAlbums = async () => {
    try {
      const res = await fetchNewAlbums();
      setDataNewAlbum(res);
    } catch (error) {
      console.error(error)
    }
  }
  const getDataSongs = async () => {
    try {
      const res = await fetchSongs();
      setDataSong(res);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getDataTopAlbums();
    getDataNewAlbums();
    getDataSongs()
  }, [])

  return (
    <div>
      <NavBar data={dataTopAlbums} />
      <HeroSection />
      <AlbumPlaylistGrids title={"Top Albums"} data={dataTopAlbums} type={"album"} />
      <AlbumPlaylistGrids title={"New Albums "} data={dataNewAlbum} type={"album"} />
      <SongsSectionDivider />
      <AlbumPlaylistGrids title={"Songs "} data={dataSong} type={"song"} setDataSong={setDataSong} />
      <SongsSectionDivider />
    </div>
  )
}

export default App;



