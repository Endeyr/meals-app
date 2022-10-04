import './App.css'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'

function App() {
	return (
		<main>
			<Search />
			{/* <Favorites /> */}
			<Meals />
			{/* <Modal /> */}
			<Footer />
		</main>
	)
}

export default App
