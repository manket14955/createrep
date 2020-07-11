

const initialState ={
   email :'',
   password:''
}

const reducer=(state=initialState, action, email, password)=>{
    let newState ={...state};
    if(action.type==='LOGIN'){
    newState.email = email 
    newState.password = password
}
    return newState
}


export default reducer