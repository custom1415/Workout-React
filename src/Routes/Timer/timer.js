import Hero from "../../components/Hero/hero";
import { TimerWorkouts } from "../../components/Timer-workouts/Timer-workouts";
import { TimerComponent } from "../../components/Timer/timer";
import { UserInfo } from "../../components/User-Info/User-Info";
import { Flex } from "../Navigation/styles.navigation";

const Timer = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#191919",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TimerComponent />
      <TimerWorkouts />
    </div>
  );
};
export default Timer;
