import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Player = ({
  songs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  songInfo,
  setSongInfo,
  setSongs,
}) => {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const getTime = (time) => {
    time = Math.floor(time);
    const minutes = Math.floor(time / 60);
    let secounds = time % 60;
    if (secounds < 10) {
      secounds = "0" + secounds;
    }
    return minutes + ":" + secounds;
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === +1) {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (songInfo.currentTime > 3) {
        audioRef.current.currentTime = 0;
      } else {
        if (currentIndex === 0) {
          await setCurrentSong(songs[songs.length - 1]);
          activeLibraryHandler(songs[songs.length - 1]);
        } else {
          await setCurrentSong(songs[currentIndex - 1]);
          activeLibraryHandler(songs[currentIndex - 1]);
        }
      }
    }
    if (isPlaying) audioRef.current.play();
  };
  //Add the styles
  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className={"player"}>
      <div className={"time-control"}>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className={"track"}
        >
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type={"range"}
          />
          <div style={trackAnimation} className={"animate-track"}>
            {""}
          </div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className={"play-control"}>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(-1)}
          className={"skip-back"}
          size={"2x"}
          icon={faStepBackward}
        />
        <FontAwesomeIcon
          className={"Play"}
          size={"2x"}
          icon={!isPlaying ? faPlay : faPause}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(+1)}
          className={"skip-forward"}
          size={"2x"}
          icon={faStepForward}
        />
      </div>
    </div>
  );
};

export default Player;
