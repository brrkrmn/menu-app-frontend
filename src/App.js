import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import { useDispatch } from "react-redux";
import { removeUser } from "./reducers/loggedInUserReducer";

function App() {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(removeUser())
  }
  return (
    <div>
      <SignUpForm />
      <LogInForm />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default App;
