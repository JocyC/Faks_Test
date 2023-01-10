import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import {
  Claim,
  SingleClaimResponse,
  SingleLabResponse,
  MessagesResponse,
  MsgBody,
} from "../interfaces";
import {
  useGetSingleClaimQuery,
  useGetSingleLabQuery,
  useGetMessagesQuery,
  useCreateMessageMutation,
} from "../features/api/apiSlice";
import fakeClaimsList from "../fakeData/fakeClaimsData";
import { SingleMessage } from "../components";
import {
  singleClaim,
  singleLab,
  messagesList,
} from "../fakeData/fakeShowPageData";
import { useState } from "react";

type IdParams = {
  id: string;
};
const ShowPage = () => {
  const { id } = useParams<IdParams>();
  let claimId: number | null;
  claimId = id ? parseInt(id[1]) : null;

  /*
  // get single claim with id 
  const { pharmacy, lab } = useGetSingleClaimQuery<SingleClaimResponse>(claimId);
  // pharmacy info
  const {
    name: pharName,
    address_line_1: pharAddress,
    address_city: pharCity,
    address_zip_code: pharCip,
  } = pharmacy;
  */

  /*
  // get single lab with labID
  const { id: labId, name: labName, logo_url: labLogo } = lab;
  const { user: labUser } = useGetSingleLabQuery<SingleLabResponse>(labId);
  const { first_name, last_name, email } = labUser;
  */

  /*
  // get all messages with id
  const { messages } = useGetMessagesQuery<MessagesResponse>(undefined);
  */

  /* */
  //create a new message
  const [newMsg, setNewMsg] = useState("");
  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      type: string;
      name: string;
      value: string;
      onchange(): void;
      className: string;
    };
    const value = target.value;
    setNewMsg(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!newMsg) {
      console.log("cannot send blank message");
      return;
    }
    /*
    // Post new message to api
    const msg: MsgBody = {
      message: { content: newMsg, user_id: 1, claim_id: claimId, file: null },
    };
    useCreateMessageMutation(msg);
    */

    //  For now, only poor console.log()......
    console.log(`submited a new message ${newMsg}`);
    // set the form to blank again
    setNewMsg("");
  };

  // Below are all dummy data from the API document just to show the structure of ShowPage
  const { pharmacy, lab } = singleClaim;
  const {
    name: pharName,
    address_line_1: pharAddress,
    address_city: pharCity,
    address_zip_code: pharCip,
  } = pharmacy;
  const { id: labId, name: labName, logo_url: labLogo } = lab;
  const { user: labUser } = singleLab;
  const { first_name, last_name, email } = labUser;
  const { messages } = messagesList;

  return (
    <Wrapper>
      <div className="infos">
        <h3>{`Claim No.${claimId}`}</h3>
        {/* info on the pharmacy */}
        <div className="info-phar">
          <h4>{`Pharmacy : ${pharName}`}</h4>
          {`Address : ${pharAddress}, ${pharCity}, ${pharCip}`}
        </div>
        {/* info on the lab */}
        <div className="info-lab">
          <img src={labLogo} alt={labName} className="lab-logo" />
          <h4>{`Lab : ${labName}`}</h4>
          <div className="info-user">
            {`User : ${first_name} ${last_name}`}
            <br />
            {email ? `Email : ${email}` : "Email : unknown"}
          </div>
        </div>
      </div>
      <div className="messages">
        {/* messages */}
        <h4>All Messages</h4>
        <div className="msg-container">
          {messages.map((msg, index) => {
            return <SingleMessage msg={msg} key={index} />;
          })}
        </div>
        {/* create message */}
        <form className="create-msg" onSubmit={handleSubmit}>
          <h5>Send a new message</h5>
          <input
            type="text"
            name="newMsg"
            value={newMsg}
            onChange={handleChange}
            className="form-input"
          />
          <button className="btn" type="submit">
            send
          </button>
        </form>
      </div>
      <Link to="/">Back home</Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 4rem;
  align-items: center;
  justify-content: center;
  .infos {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 1rem;
    max-height: 40vh;
  }
  .messages {
    display: grid;
    grid-template-rows: 1fr auto;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .msg-container {
    display: grid;
    grid-template-rows: auto;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
    border: solid 2px var(--clr-primary-10);
    border-radius: var(--radius);
    padding: 1rem;
  }
  .create-msg {
    text-align: center;
    display: grid;
    grid-template-rows: auto;
    row-gap: 0.5rem;
  }
  .form-input {
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 0.5rem;
    min-height: 5rem;
  }
`;

export default ShowPage;
