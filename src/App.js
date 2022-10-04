import './App.css'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'
import { useGlobalContext } from './context'

function App() {
	const { showModal } = useGlobalContext()
	return (
		<main>
			<Search />
			{/* <Favorites /> */}
			<Meals />
			{showModal && <Modal />}
			<Footer />
		</main>
	)
}

export default App
