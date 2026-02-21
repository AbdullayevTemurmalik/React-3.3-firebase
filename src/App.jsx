import "./App.css";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

function App() {
  let LoginWithGoogle = async () => {
    try {
      let res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button>
        <span onClick={LoginWithGoogle}>Sign Up with Google</span>
      </button>
    </>
  );
}

export default App;
