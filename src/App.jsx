import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { PortfolioProvider } from "./provider/PortfolioProvider";
function App() {
  return (
    <>
      <body>
        <Header />
        <PortfolioProvider>
          <Body />
        </PortfolioProvider>
        <Footer />
      </body>
    </>
  );
}

export default App;
