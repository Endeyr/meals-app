import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

// children prop displays all components
const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([])
	// Loading
	const [loading, setLoading] = useState(false)
	// Search state
	const [searchTerm, setSearchTerm] = useState('')
	// can use fetch api or axios
	const fetchMeals = async (url) => {
		setLoading(true)
		try {
			const { data } = await axios(url)
			if (data.meals) {
				setMeals(data.meals)
			} else {
				setMeals([])
			}
		} catch (e) {
			console.log(e.response)
		}
		setLoading(false)
	}

	const fetchRandomMeal = () => {
		fetchMeals(randomMealUrl)
	}

	// need dependency array or you have infinite loop
	useEffect(() => {
		fetchMeals(allMealsUrl)
	}, [])

	useEffect(() => {
		if (!searchTerm) return
		fetchMeals(`${allMealsUrl}${searchTerm}`)
	}, [searchTerm])

	return (
		<AppContext.Provider
			value={{ loading, meals, setSearchTerm, fetchRandomMeal }}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
