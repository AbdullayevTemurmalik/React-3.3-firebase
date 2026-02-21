import "./App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { Chrome } from "lucide-react"; // 👈 Google icon (Chrome)

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
    <div className="App">
      <button onClick={LoginWithGoogle} className="google-btn">
        <Chrome size={20} />
        <span>Sign Up with Google</span>
      </button>
    </div>
  );
}

export default App;
