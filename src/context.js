import React, { useContext } from 'react'

const AppContext = React.createContext()

// children prop displays all components
const AppProvider = ({ children }) => {
	return <AppContext.Provider value="hello">{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
