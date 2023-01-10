import { Link } from "react-router-dom";
import styled from "styled-components";
import { Claim } from "../interfaces";

type SingleClaimProps = {
  key: Number;
  claim: Claim;
};

const SingleClaim = ({ claim }: SingleClaimProps) => {
  const { id, pharmacy, lab } = claim;
  const {
    name: pharName,
    address_line_1: pharAddress,
    address_city: pharCity,
    address_zip_code: pharCip,
  } = pharmacy;
  const { name: labName } = lab;
  return (
    <Wrapper>
      <div className="infos">
        <h4>{`Claim No.${id}`}</h4>
        <div className="info-phar">
          {`Pharmacy : ${pharName}`}
          <br />
          {`Address : ${pharAddress}, ${pharCity}, ${pharCip}`}
        </div>
        <div className="info-lab">{`Lab : ${labName}`}</div>
      </div>
      <div className="btn-container">
        <Link to={`/claims/:${id}`} className="btn">
          detail
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  align-items: center;
  justify-content: center;

  background: var(--clr-white);
  padding: 2rem;
  border-radius: var(--radius);
`;

export default SingleClaim;
