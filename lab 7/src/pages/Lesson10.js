import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/actions/users";
import {decreaseAction, increaseAction} from "../store/reducers/counterReducer";
import {addUserAction, removeUserAction} from "../store/reducers/userReducer";
import {uid} from "uid";
import {names, uniqueNamesGenerator} from "unique-names-generator";

const PAYLOAD = 10;

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter);
    const topic = useSelector(state => state.counterReducer.lesson.topic);
    const users = useSelector(state => state.userReducer.users);
    console.log(users)
    const increase = () => {
        dispatch(increaseAction(PAYLOAD))
    }
    const decrease = () => {
        dispatch(decreaseAction(PAYLOAD))
    }

    const addUser = () => {
        const user = {
            name: uniqueNamesGenerator({dictionaries: [names]}),
            id: uid()
        }
        dispatch(addUserAction(user));
    }
    const addUsers = () => {
        dispatch(fetchUsers());
    }

    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    }

    return (
        <div>
            <div>
                Lesson: {topic}
                <br/>
                Counter: {counter}
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>

            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={addUsers}>Add users from fakeAPI</button>

                {users.length ?
                    <div>
                        <h3>Users</h3>
                        {users.map(user =>
                            <div id={user.id} key={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                    </div>
                    :
                    <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export {Lesson10}