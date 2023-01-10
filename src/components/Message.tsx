import React from "react";
import styled from "styled-components";
import { Message } from "../interfaces";

type SingleMessageProps = {
  key: Number;
  msg: Message;
};

const SingleMessage = ({ msg }: SingleMessageProps) => {
  const { content, user } = msg;
  const { id: userId, first_name, last_name } = user;
  return (
    <Wrapper>
      <div className="header">
        <h5>{`Sender : ${first_name} ${last_name} (id : ${userId})`}</h5>
        <p>Message : </p>
      </div>
      <div className="content">{content}</div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: transparent;
  border: solid 2px var(--clr-primary-7);
  border-radius: var(--radius);
  padding: 1rem;
  align-items: center;
  justify-content: start;
  .content {
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 0.5rem;
    min-height: 5rem;
  }
`;

export default SingleMessage;
