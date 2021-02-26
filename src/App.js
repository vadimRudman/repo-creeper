import LandingPage from './components/landing-page/LandingPage';

export const repoCardData = {
	repoName: "TestName",
	repoDescription: "Description",
	numOfStargazers: 1337,
	numOfPeopleWatching: 420
}

function App() {
	return (
		<LandingPage />
	);
}

export default App;
