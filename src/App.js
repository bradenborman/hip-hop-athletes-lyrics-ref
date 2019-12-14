import React from 'react';
import './App.scss';
import data from "./data/data.json";
import SongReference from './componets/SongReference';

let songData = data.songs

function App() {
   
const mappedSongs = songData.map( (song, index) =>
  <SongReference key={index} title={song.title} artist={song.artist} lyric={song.lyric} athlete={song.athlete}
  />
);


  return (
    <div className="App">
      {mappedSongs}
      <p className="moreLinks"><a href={data.url}>More Lyrics</a></p>
    </div>
  );
}

export default App;
