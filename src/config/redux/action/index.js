import firebase from '../../firebase'

export const actionUsername = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'qweqweqwe'})
    }, 2000)
}

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true})
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then (res => {
            console.log('success: ',res);
            dispatch({type: 'CHANGE_LOADING', value: true})
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: true})
          })
    )

}

export const loginUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true})
    return (
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then (res => {
            console.log('success: ',res);
            dispatch({type: 'CHANGE_LOADING', value: true})
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: true})
          })
    )

}