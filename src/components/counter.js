import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rand}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">DEC</button>
      <button onClick={inc} className="btn btn-primary">INC</button>
      <button onClick={rand} className="btn btn-primary">RAND</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   // const {inc, dec, rand} = bindActionCreators(actions, dispatch)
//   // return {
//   //   inc,
//   //   dec,
//   //   rand
//   // }
//   return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter) //connect сам может биндить actions и dispatch, поэтому можно просто передать actions в connect
export default connect(mapStateToProps, actions)(Counter)