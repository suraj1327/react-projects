import Card from "../UI/Card";
import styles from './AddUsers.module.css';
import Button from "../UI/Button";
import { useState , useRef} from "react";
import ErrorModal from '../UI/ErrorModal';
import Wrapper from "../Helpers/Wrapper";

const AddUsers = props => {
    const nameInputRef = useRef(); // Stores the DOM associated with the input. Use this to only read value.p
    const ageInputRef = useRef();

    const [error,setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message:'Please enter valid values.'
            })
            return;
        }
        if(Number(enteredAge) < 1){
            setError({
                title: 'Invalid Age',
                message:'Please enter valid value for age.'
            })
            return;
        }
        props.onAddUser(enteredName,enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        // Wrapping a lot of divs can lead to <div> Soup so instead use a custom wrapper. Inbuilt it's called Fragment. Doesn't render anything.
        <Wrapper>
            { error &&
                <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}></ErrorModal>
            }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUsers;