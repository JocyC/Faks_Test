import styled from "styled-components";
import { SingleClaim, Search } from "../components";
import { Claim } from "../interfaces";
import { Link } from "react-router-dom";
import { useGetClaimsQuery } from "../features/api/apiSlice";
import fakeClaimsList from "../fakeData/fakeClaimsData";

const HomePage = () => {
  /*
  // get data of all the claims with useGetClaimsQuery:
  const { claims,meta } = useGetClaimsQuery<ClaimsResponse>(undefined);
  */

  // temporarily unable to get the data from backend, so use fake data fakeClaimsList below

  return (
    <Wrapper>
      <h1>Your claims</h1>
      <Link to="/create-claim" className="btn new-btn">
        create a new claim
      </Link>
      <div className="search-container">
        <Search />
      </div>
      <div className="claims-container">
        {fakeClaimsList.map((claim, index) => {
          return <SingleClaim claim={claim} key={index} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;

  .new-btn {
    text-align: center;
  }

  .claims-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 1rem;
    margin: 0rem;
  }
  @media (min-width: 992px) {
    .claims-container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
`;

export default HomePage;
