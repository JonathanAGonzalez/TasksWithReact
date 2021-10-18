import { TaskArea, Title } from "../styles";
import Spinner from "./Spinner";
const Form = (props) => {
  const {
    edition,
    editTask,
    addTask,
    task,
    title,
    setTask,
    setTitle,
    closeEditTask,
    loading,
  } = props;

  return (
    <div className="col-12 m-auto col-md-7  col-lg-4 my-3">
      <Title>{edition ? "Edit Task" : "Add Task"}</Title>
      <form onSubmit={edition ? editTask : addTask}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control mb-2"
          type="text"
          placeholder="Title"
        />
        <TaskArea
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="form-control mb-2"
          type="text"
          placeholder="Notes"
        />

        <button
          type="submit"
          className={
            edition ? "btn btn-warning btn-block" : "btn btn-dark btn-block"
          }
        >
          {edition ? "Edit" : <Spinner loading={loading} text="Add" />}
        </button>
        {edition && (
          <button className="btn btn-danger btn-block" onClick={closeEditTask}>
            Cerrar
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
