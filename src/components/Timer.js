import { useEffect } from "react";
function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("tick");
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <button className="btn">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </button>
  );
}

export default Timer;
