const isLogged = (state, action) =>{
    if(action == "SIGN IN")
        return true;
    else
        return false;
}
export default isLogged;
