import styled from "styled-components";
export const Title = styled.h1`
  font-size: 1.3rem;
  color: #f2f2f2;
  text-transform: uppercase;
`;
export const TaskArea = styled.textarea``;

export const Container = styled.div`
  filter: drop-shadow(0px 0px 2px #000000);
  color: #f908f9;
  background: #353333;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 10px;
  padding: 20px;
  transition: 0.6s;
  &::after {
    content: "";
    width: 3px;
    height: 100%;
    background: #f908f9;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover {
    filter: drop-shadow(0px 0px 1px #f2f2f2);
  }
  @media (max-width: 360px) {
    margin: 5px auto;
  }
`;
export const Paragraph = styled.p`
  color: #f2f2f2;
`;
export const SpanParagraph = styled.span`
  font-weight: bold;
  color: #f908f9;
  text-decoration: underline;
`;
export const ContainerSpan = styled.div`
  margin: 20px;
  word-wrap: break-word;
`;

export const ParagraphTask = styled.p`
  color: #f2f2f2;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const ButtonCardDelete = styled.button`
  border: none;
  margin: 5px 5px;
  background: #f908f9;
  border-radius: 10px;
  padding: 15px;
  width: 45%;
  max-width: 100%;
  transition: 0.6s;
  color: #353333;
  &:hover {
    filter: drop-shadow(0px 0px 5px #f908f9);
    transform: translateY(-5px);
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const ButtonCardEdit = styled.button`
  border: none;
  margin: 5px 5px;
  background: #00e7ff;
  border-radius: 10px;
  padding: 15px;
  width: 45%;
  max-width: 100%;
  transition: 0.6s;
  color: #353333;
  &:hover {
    filter: drop-shadow(0px 0px 5px #000000);
    transform: translateY(-5px);
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;
