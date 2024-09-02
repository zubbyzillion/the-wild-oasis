import styled from "styled-components";

function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    background-color: yellow;
  `;

  const Button = styled.button`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 7px;
    background-color: purple;
    color: white;
    cursor: pointer;
    margin: 20px;
  `;

  const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0.8rem 1.2rem;
  `;

  const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
  `;

  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("Checked In")}>Check In</Button>
      <Button onClick={() => alert("Checked Out")}>Check Out</Button>

      <Input type="number" placeholder="Number of Guests" />
      <Input type="number" placeholder="Number of Guests" />
  </StyledApp>
  )
}

export default App
