import React, {useState} from 'react'

const Context = React.createContext({})

export function IndexContextProvider ({children}) {
    const [ selected, setSelected ] = useState({selec: false, indexSelected: null})
    const [ indexCurrent, setIndexCurrent ] = useState('ind__two')

    return (
    
    <Context.Provider value={{ selected, setSelected, indexCurrent, setIndexCurrent}}>
        {children}
    </Context.Provider>
    )

}

export default Context