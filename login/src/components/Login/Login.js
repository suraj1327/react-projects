import React, { useState , useEffect , useReducer , useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input
 from '../UI/Input/Input';
// Reducer to group multiple states at once.
const emailReducer = (state,action) =>{
  if(action.type === 'USER_INPUT'){
    return { value : action.value, isValid:action.value.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value,isValid:state.value.includes('@')}
  }
  return {value:'',isValid:false};
};

const passwordReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return { value : action.value, isValid:action.value.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value,isValid:state.value.trim().length > 6}
  }
  return {value:'',isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail] = useReducer(emailReducer,{value:'',isValid:null});
  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{value:'',isValid:null});

  const ctx = useContext(AuthContext);

  // Object destructuring so that useEffect only runs the required number of times
  const { isValid: emailIsValid } = emailState;
  const { isValid:passwordIsValid} = passwordState;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

 // UseEffect is called after reload of the component and state update. Hence you always gets the latest state.
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
    },500);
    // This is called a cleanup. It  does not run after the first time the useEffect runs but thereafter it runs before the execution of every useEffect
    // and it executes before demounting the component (always regardless of the dependency)
    return () => {
      clearTimeout(identifier);
    };
  },[emailIsValid,passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',value: event.target.value});
    //setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT',value:event.target.value})
    //setFormIsValid(emailState.isValid && event.target.value.trim().length > 6)
  };

  const validateEmailHandler = () => {
    // Here different state depends on different state. Not favorable due to how state rendering takes place.
    // Cannot depend on previous rule too.
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      emailInputRef.current.focus();
    }else if(!passwordIsValid){
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" label="E-Mail" ref={emailInputRef} type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}></Input>
        <Input id="password" label="Password" ref={passwordInputRef} type="password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;



// Rules of Hooks:
// 1. Must call hooks only in React Component Functions and Custom Hooks.
// 2. Must only call Hooks at the Top Level. Don't call them in nested functions or block level elements.
// 3. Always add everything that you use inside a useEffect as a dependency