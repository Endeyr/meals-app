import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=apple'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

// children prop displays all components
const AppProvider = ({ children }) => {
	const [meals, setMeals] = useState([])
	// Loading
	const [loading, setLoading] = useState(false)
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

	// need empty dependency array or you have infinite loop
	useEffect(() => {
		fetchMeals(allMealsUrl)
	}, [])

	return (
		<AppContext.Provider value={{ loading, meals }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
