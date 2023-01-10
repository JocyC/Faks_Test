import { useState } from "react";
import styled from "styled-components";

const Search = () => {
  // Need claimsSlice for this, add later
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      type: string;
      name: string;
      value: string;
      onchange(): void;
      className: string;
    };
    const value = target.value;
    setSearchTerm(value);
    // should be something like dispatch(updateFilter)
    console.log(searchTerm);
  };
  return (
    <Wrapper>
      <form>
        <h5>Search for... </h5>
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          className="form-input"
        />
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form-input {
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 0.3rem;
    width: 100%;
  }
`;
export default Search;
