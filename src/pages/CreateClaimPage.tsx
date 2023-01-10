import styled from "styled-components";
import { useState } from "react";
import { ClaimBody } from "../interfaces";
import { useCreateClaimMutation } from "../features/api/apiSlice";
import { Link } from "react-router-dom";

const CreateClaimPage = () => {
  const [newMsg, setNewMsg] = useState("");
  const [labID, setLabID] = useState("");
  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      type: string;
      name: string;
      value: string;
      onchange(): void;
      className: string;
    };
    const name = target.name;
    const value = target.value;
    name === "lab-id" ? setLabID(value) : setNewMsg(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!newMsg || !labID) {
      console.log("please fill out all the blank");
      return;
    }
    /*
    // Post new claim to api
    const labIDNumber: number = parseInt(labID);
    const claimBody: ClaimBody = {
      claim: {
        pharmacy_id: 1,
        lab_id: labIDNumber,
        messages_attributes: [
          {
            user_id: 1,
            content: newMsg,
            file: null,
          },
        ],
      },
    };
    useCreateClaimMutation(claimBody);
     */
    //  For now, only poor console.log()......
    console.log(`submited a new claim ${newMsg} to lab ${labID}`);
    // set the forms to blank again
    setLabID("");
    setNewMsg("");
  };

  return (
    <Wrapper>
      <h3>Create a new claim</h3>
      <div className="form-row">
        <label className="form-label">Please enter the lab id</label>
        <input
          type="text"
          value={labID}
          name="lab-id"
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Please enter your message</label>
        <input
          type="text"
          value={newMsg}
          name="newMsg"
          onChange={handleChange}
          className="form-input msg-input"
        />
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>
        create
      </button>
      <Link to="/">Back home</Link>
    </Wrapper>
  );
};
const Wrapper = styled.form`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-rows: auto;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;

  .form-row {
    display: grid;
    grid-template-rows: auto;
    width: 100%;
  }
  .form-input {
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 0.3rem;
    width: 100%;
  }
  .msg-input {
    min-height: 5rem;
  }
`;

export default CreateClaimPage;
