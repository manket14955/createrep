

const initialState={
    age:21
}

const reducer=(state=initialState, action, payload)=>{
    console.log('reducer')
    const newState = {...state};
    console.log('newState', newState)
    console.log('newState.age', newState.age)
    if(action.type==="AGE_UP"){
        newState.age+=5
    }
    if(action.type==="AGE_DOWN"){
        newState.age-=5
    }
    
     return newState
}


export default reducer;