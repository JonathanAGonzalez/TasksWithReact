import { ButtonCardDelete } from "../styles";

const ButtonDelete = ({ text, deleteTask, id }) => {
  return (
    <ButtonCardDelete onClick={() => deleteTask(id)}>{text}</ButtonCardDelete>
  );
};

export default ButtonDelete;
