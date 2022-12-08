import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { WorkoutReducer } from "./Workout/workout.reducer";
const workoutPersistConfig = {
  key: "workout",
  storage: storage,
  blacklist: ["workoutList,arrToLoad"],
};
export const rootReducer = combineReducers({
  // workout: persistReducer(workoutPersistConfig, WorkoutReducer),
  workout: WorkoutReducer,
});
