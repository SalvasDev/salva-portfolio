import React, {useState} from 'react'

const Context = React.createContext({})

export function IndexContextProvider ({children}) {
    const [ selected, setSelected ] = useState({selec: true, indexSelected:'Start'})
    const [ indexCurrent, setIndexCurrent ] = useState('Start')

    return (
    
    <Context.Provider value={{ selected, setSelected, indexCurrent, setIndexCurrent}}>
        {children}
    </Context.Provider>
    )

}

export default Context