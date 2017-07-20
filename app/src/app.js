import React from 'react'
//Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import AppContainer from './container/AppContainer'

// Shows redux logs in JS console
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState){
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
    )
    return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

const App = () =>(

    // Sets apps with redux store
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)

export default App