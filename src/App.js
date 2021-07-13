import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/navbar/Navbar';
import Input from './components/Input/Input';
import Stats from './components/StatsSction/Stats';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Fotter';

function App() {
	return (
		<div>
			<Navbar />
			<InfoSection />
			<Input />
			<Stats />
			<CallToAction />
			<Footer />
		</div>
	);
}

export default App;
