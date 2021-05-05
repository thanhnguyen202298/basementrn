import React, { useContext, useReducer, createContext } from 'react'
import { Action } from './action'

function reducer(state = {}, action = { type: '' }) {
    switch (action.type) {
        case Action.openDraw: {
            return {...state, ...action}
        }
    }
    return { ...state, action }
}

const AppContext = createContext({})

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, {})
    const initValue = { state, dispatch }
    return (
        <AppContext.Provider value={initValue}>
            {children}
        </AppContext.Provider>
    )
}

export const getContext = () => useContext(AppContext)