import { FormInput } from "../../Routes/Workout/styles.workout";
import {
  EditContainer,
  EditInputContainer,
} from "../Edit-modal/styles.edit-modal";

export const CreateFolderModal = () => {
  return (
    <EditContainer>
      <EditInputContainer>
        <FormInput />
      </EditInputContainer>
    </EditContainer>
  );
};
