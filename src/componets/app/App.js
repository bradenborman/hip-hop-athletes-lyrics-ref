import React from 'react';
import data from "../../data/data.json";

import SongReference from '../songs/SongReference';
import Header from '../header/Header';

let songData = data.songs.sort(() => Math.random() - 0.5);


function App() {
   
  const mappedSongs = songData.map( (song, index) =>
    <SongReference
      key={index}
      title={song.title}
      artist={song.artist}
      lyric={song.lyric}
      athlete={song.athlete}
      width={getRandomWidth()}
      margin={getRandomMargin()}
      height={getRandomHeight()}
    />
  );

  function getRandomMargin() {
    return (Math.floor(Math.random() * 60) + 20) + "px"
 }

 function getRandomWidth() {
  return (Math.floor(Math.random() * 400) + 250) + "px"
 }
 function getRandomHeight() {
  return (Math.floor(Math.random() * 100) + 200) + "px"
}
  return (

    <div className="App">
      <Header />
      {mappedSongs}
      <p className="moreLinks"><a href={data.url}>More Lyrics</a></p>
    </div>
  );
}

export default App;
