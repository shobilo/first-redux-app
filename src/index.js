import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
// import {inc, dec, rand} from './actions'
// import * as actions from './actions'
import App from './components/app'


const store = createStore(reducer)
// const {dispatch} = store

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const incDispatch = () => dispatch(inc())
// const decDispatch = () => dispatch(dec())
// const randDispatch = (value) => dispatch(rand(value))

// const incDispatch = bindActionCreator(inc, dispatch)
// const decDispatch = bindActionCreator(dec, dispatch)
// const randDispatch = bindActionCreator(rand, dispatch)

// const incDispatch = bindActionCreators(inc, dispatch)
// const decDispatch = bindActionCreators(dec, dispatch)
// const randDispatch = bindActionCreators(rand, dispatch)

// const {inc, dec, rand} = bindActionCreators(actions, dispatch) // диспэтчи, которые меняют стор через actions , в которых хранится тип изменения

// document.getElementById('inc').addEventListener('click', inc)
// document.getElementById('dec').addEventListener('click', dec)
// document.getElementById('rand').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10)
//   rand(value)
// })

// const update = () => {
  // document.getElementById('counter').textContent = store.getState()
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
   document.getElementById('root'))
// }

// update()

// store.subscribe(update)

//при провайдере не нужна подписка на update

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})

