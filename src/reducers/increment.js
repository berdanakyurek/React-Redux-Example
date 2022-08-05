const increment = (state=0, action) => {
    if(action == 'INCREMENT'){
        return state + 1
    }
    else if(action == 'DECREMENT'){
        return state - 1
    }
    else{
        return state;
    }
}
export default increment;
