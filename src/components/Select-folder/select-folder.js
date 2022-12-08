import { CreateFolderModal } from "./create-folder-modal";
import "./select-folder.scss";

export const SelectFolder = ({ onValueChange, name }) => {
  return (
    <>
      <select name={name} onChange={onValueChange}>
        <option defaultValue>Choose Folder</option>
        <option>Push Pull Legs</option>
        <option>Bro Split</option>
        <option>Arnold's Split</option>
      </select>
    </>
  );
};
