import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { ThemeProvider } from "./components/DarkMode";
// import { SigninForm } from "./components/Signin";
// import { SignupForm } from "./components/Signup";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
