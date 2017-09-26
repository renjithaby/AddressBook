/**
 * Created by rabby on 26/09/2017.
 */
import history from '../History';

const UserDataReducer = (state = { user:{}}, action = {}) => {

    switch (action.type){

        case "REGISTER_SUCCESS" :
            return registerSuccess(state,action);

        case "REGISTER_FAILED" :
            return registerFailed(state,action);

        case "LOGIN_SUCCESS" :
            return loginSuccess(state,action);

        case "LOGIN_FAILED" :
            return loginFailed(state,action);

        default:
            return state;
            break;
    }


    function registerSuccess(state, action){
        history.push('/signin');
        return {...state};
    }

     function registerFailed(state, action){
        return {...state};
    }

    function loginSuccess(state, action){
         history.push('/home');
        return {...state, user : action.data.user  };
    }

    function loginFailed(state, action){
        return {...state};
    }



}



export default UserDataReducer;
