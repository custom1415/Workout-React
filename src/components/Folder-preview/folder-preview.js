import { WorkoutCard } from "../Workout-card/WorkoutCard";

export const FolderPreview = ({ folderName, workoutList }) => {
 
  // console.log(setTotalworkout);
  return (
    <>
      {workoutList[folderName]
        .filter((item, num) => num < 3)
        .map((w, i) => {
          return <WorkoutCard key={i} folderName={folderName} workout={w} />;
        })}
    </>
  );
};
