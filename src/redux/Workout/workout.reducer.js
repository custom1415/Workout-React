import { WORKOUT_ACTION_TYPES } from "./workout.types";

const INITIAL_STATE = {
  workoutList: [],
  isModalOpen: false,
  editValues: {},
  folderName: "",
  arrToLoad: "",
};
export const WorkoutReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case WORKOUT_ACTION_TYPES.SET_WORKOUT:
      return {
        ...state,
        workoutList: payload,
      };
    case WORKOUT_ACTION_TYPES.EDIT_WORKOUT:
      return {
        ...state,
        workoutList: payload,
        isModalOpen: false,
      };
    case WORKOUT_ACTION_TYPES.REMOVE_WORKOUT:
      return {
        ...state,
        workoutList: payload,
      };
    case WORKOUT_ACTION_TYPES.ARR_TO_LOAD:
      return {
        ...state,
        arrToLoad: payload,
      };

    case WORKOUT_ACTION_TYPES.SET_EDIT_VALUES_AND_TOGGLE_WORKOUT_MODAL:
      return {
        ...state,
        editValues: payload.workout,
        isModalOpen: payload.bool,
        folderName: payload.folderName,
      };
    default:
      return state;
  }
};
