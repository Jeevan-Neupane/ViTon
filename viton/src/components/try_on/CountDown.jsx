import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const LoadingTimer = () => {
  const [key, setKey] = useState(0);

  const handleTimerComplete = () => {
    setKey((prevKey) => prevKey + 1); // Increment the key to restart the timer
  };

  return (
    <CountdownCircleTimer
      key={key} // Changing the key resets the timer, creating a loop
      isPlaying
      duration={90} // Set duration to 60 seconds
      size={50} // Set the size of the timer
      strokeWidth={6} // Set the trail width
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[60, 45, 20, 0]}
      onComplete={handleTimerComplete} // Callback to trigger on timer completion
    >
      {({ remainingTime }) => remainingTime} {/* Display remaining time */}
    </CountdownCircleTimer>
  );
};

export default LoadingTimer;
