import { ButtonCardEdit } from "../styles";

const ButtonEdit = ({ text, activeEdit, id, task, title }) => {
  return (
    <ButtonCardEdit onClick={() => activeEdit(task, id, title)}>
      {text}
    </ButtonCardEdit>
  );
};

export default ButtonEdit;
