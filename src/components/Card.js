import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import {
  Container,
  Paragraph,
  Title,
  SpanParagraph,
  ContainerSpan,
  ParagraphTask,
} from "../styles";

const Card = (props) => {
  const { id, task, title, date, deleteTask, activeEdit, hour, edition } =
    props;

  return (
    <Container className="col-11 col-md-5 col-lg-3">
      <Title> {title} </Title>
      <Paragraph>
        Date: <SpanParagraph>{date}</SpanParagraph>
      </Paragraph>
      <Paragraph>
        Hour: <SpanParagraph>{hour}</SpanParagraph>
      </Paragraph>
      <Paragraph>What to do:</Paragraph>
      <ContainerSpan>
        <ParagraphTask>{task}</ParagraphTask>
      </ContainerSpan>
      {!edition && (
        <>
          <ButtonEdit
            text="Edit"
            activeEdit={activeEdit}
            id={id}
            task={task}
            title={title}
          />
          <ButtonDelete text="Delete" deleteTask={deleteTask} id={id} />
        </>
      )}
    </Container>
  );
};

export default Card;
