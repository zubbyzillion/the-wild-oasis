import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
	const StyledApp = styled.main`
		/* background-color: orangered; */
		padding: 20px;
	`;

	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Row>
					<Row type="horizontal">
						<Heading as="h1">The Wild Oasis</Heading>

						<div>
							<Heading as="h2">Check In and Out</Heading>
							<Button onClick={() => alert("Checked In")}>Check In</Button>
							<Button variation="secondary" size="small" onClick={() => alert("Checked Out")}>Check Out</Button>
						</div>
					</Row>

					<Row type="vertical">
						<Heading as="h3">Form</Heading>
						<form>
							<Input type="number" placeholder="Number of Guests" />
							<Input type="number" placeholder="Number of Guests" />
						</form>
					</Row>
				</Row>
			</StyledApp>
		</>
	);
}

export default App;
