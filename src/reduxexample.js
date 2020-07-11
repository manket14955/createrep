import React, {Component} from 'react'
import './index.css'
// import {connect} from "react-redux"
import {useSelector, useDispatch} from 'react-redux'


const increment=(payload)=>{
    return{
        type: 'AGE_UP'
    }
}
const decrement=(payload)=>{
    return{
        type: 'AGE_DOWN'
    }
}
// class App extends Component{
    function App(){
    
   const age=useSelector(state=>state.age);
   const dispatch=useDispatch();
        console.log('this.age', age)
        return(
            <div className = 'App'>
            <h1>Age : <span>{age}</span></h1>
            <button onClick={()=>dispatch(increment(5))}>Age Up</button> 
            <button onClick={()=>dispatch(decrement(5))}>Age down</button> 
            </div>
        )
    }


// const mapDispatchToProps=dispatch=>{
//     console.log('mapDispatchToProps')
//     return {
//       onAgeUp: ()=> dispatch({type :'AGE_UP'}),
//       onAgeDown: ()=> dispatch({type :'AGE_DOWN'})
//  };
// }
// const mapStateToProps=(state)=>{
//     console.log('mapStateToProps')
//     return {
//           age:state.age
//     }

// }



export default App;






// state={
    //     age:24
    // }
    // ageUp=()=>{
    //     this.setState({
    //         ...this.state,
    //         age:++this.state.age
    //     });
    // }
    // ageDown(){
    //     this.setState({
    //         ...this.state,
    //         age:--this.state.age
    //     })
    // }