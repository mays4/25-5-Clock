
const App = () => {

  const [number, setNumber] = React.useState(5);
  const [session, setSession] = React.useState(25);
  const [display, setDisplay] = React.useState(1500);
  const [title,setTitle]=React.useState("Session")
  const [timeOn, setTimeOn] = React.useState(false);
  
  
  const timeout = setTimeout(()=>{
    if(display && timeOn){
      setDisplay(display-1)
    }
  },1000)
    
  
  const handleIncreasment = () => {
    let counter =1;
    if (number  < 60) {
      setNumber(number + counter);
     
  };
};
  const handleDecreasment = () => {
    let counter = 1;
    if (number > 1) {
      setNumber(number - counter);
      
    }
  };

  const sessionIncreasment = () => {
    let counter = 1;
    if (session  < 60) {
      setSession(session + counter);
      setDisplay(display + 60)
     
    }
  };
  const sessionDecreasment = () => {
    let counter = 1;
    if (session  > 1) {
      setSession(session - counter);
      setDisplay(display - 60)
      
    }
  };
 
const reset = () => {
  clearTimeout(timeout);
    const breakAudio = document.getElementById("beep");  
    setNumber(5);
    setSession(25);
     setTitle("Session")
    breakAudio.pause();
    breakAudio.currentTime = 0;
    setDisplay(1500);
    setTimeOn(false);
  };
 
  const controlTime  = () => {
    clearTimeout(timeout);
    setTimeOn(!timeOn);
  }
  
  const resetTimer=()=>{
     const breakAudio = document.getElementById("beep");
    if (!display && title ==="Session") {
        setDisplay(number * 60);
        setTitle("Break");
         breakAudio.play();
      }
    if (! display && title === "Break") {
        setDisplay(session  * 60);
        setTitle("Session");
        breakAudio.play();
        //  breakAudio.currenttime = 0;
      }
  }
  
  const clock = () => {
    if(timeOn){
      timeout
      resetTimer()
    }else {
      clearTimeout(timeout)
    }
  }
  
  React.useEffect(() => {
    clock()
  }, [timeOn, display, timeout])
 
  const formatTime = () => {
    let mintues = Math.floor(display/ 60);
    let seconds = display % 60;
    return (
      (mintues < 10 ? "0" + mintues : mintues) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  
  return (
    <>
      <h1 className="clock">25 + 5 Clock</h1>
      <div className="label-div">
        <div id="break-label">
          {" "}
          <h4>Break Length</h4>
          <div className="label-in-de">
            <button
              disabled={timeOn}
              onClick={handleDecreasment}
              className="button-style"
              id="break-decrement"
            >
              <i class="fa-regular fa fa-arrow-down"></i>
            </button>
            <p id="break-length">{number}</p>
            <button
              disabled={timeOn}
              onClick={handleIncreasment}
              className="button-style"
              id="break-increment"
            >
              <i class="fa-regular fa fa-arrow-up"></i>
            </button>
          </div>
        </div>

        <div id="session-label">
          {" "}
          <h4>session Length</h4>
          <div className="session-in-de">
            <button
              disabled={timeOn}
              onClick={sessionDecreasment}
              className="button-style"
              id="session-decrement"
            >
              <i class="fa-regular fa fa-arrow-down"></i>
            </button>
            <p id="session-length">{session}</p>

            <button
              disabled={timeOn}
              onClick={sessionIncreasment}
              className="button-style"
              id="session-increment"
            >
              <i class="fa-regular fa fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="timer-label">
        <h2>{title}</h2>
        <h2 id="time-left">{formatTime()}</h2>
      </div>
      <div className="reset-section">
        <div>
          <audio
            id="beep"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ></audio>
        </div>
        <button onClick={controlTime} id="start_stop">
          <i class="fa-regular fa fa-play"></i>
          <i className="play-reset" class="fa-regular fa fa-pause"></i>
        </button>

        <button id="reset" onClick={reset}>
          <i className="play-reset" class="fa-regular fa fa-power-off"></i>
        </button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));





