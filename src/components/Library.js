import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          setCurrentSong={setCurrentSong}
          song={song}
          songs={songs}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
        />
      ))}
    </div>
  );
};

export default Library;
