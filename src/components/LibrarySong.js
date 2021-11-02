const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    await setCurrentSong(selectedSong[0]);
    if (isPlaying) audioRef.current.play();
    //Add Active State
    const newSongs = songs.map((song) => {
      if (selectedSong[0].id === song.id) {
        //blad
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""} ${song.id}`}
    >
      <img alt={song.name + " Cover"} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
