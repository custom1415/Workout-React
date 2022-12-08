import { createSelector } from "reselect";
const selectWorkoutReducer = (state) => state.workout;
export const selectWorkoutArray = createSelector(
  [selectWorkoutReducer],
  (workout) => workout.workoutList
);
export const selectIsModalOpen = createSelector(
  [selectWorkoutReducer],
  (workout) => workout.isModalOpen
);
export const selectEditValues = createSelector(
  [selectWorkoutReducer],
  (workout) => workout.editValues
);
export const selectFolder = createSelector(
  [selectWorkoutReducer],
  (workout) => workout.folderName
);
export const selectReducedWorkoutArray = createSelector(
  [selectWorkoutArray],
  (c) =>
    c.reduce((acc, item) => {
      const { name, list } = item;
      acc[name] = list;
      return acc;
    }, {})
);
export const selectarrToLoad = createSelector(
  [selectWorkoutReducer],
  (c) => c.arrToLoad
);
