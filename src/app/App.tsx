import { Header } from "widgets/Header/Header";
import "./styles/index.scss";
import { useTheme } from "./providers/themeProvider/lib/useTheme";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`app ${theme}`}>
        <Header />
        <main className="main">
          <div className="container">
            <AppRouter />
          </div>
        </main>
        <footer>
          <div className="container">footer</div>
        </footer>
      </div>
    </>
  );
};
