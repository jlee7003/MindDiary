import Header from "./components/UI/Header";
import User from "./components/user/User";
import UserLoginForm from "./components/user/UserLoginForm";
import UserRegisterForm from "./components/user/UserRegisterForm";
import HomePage from "./pages/HomePage";
import DiaryPage from "./pages/DiaryPage";

function App() {
    return (
        <div className="App">
            {/* <HomePage /> */}
            <DiaryPage />
            {/* <Header />
            <User />
            <UserLoginForm />
            <UserRegisterForm /> */}
        </div>
    );
}

export default App;
