import { Route, Routes } from "react-router-dom";
import { StyledContainer } from "./app.styles";
import { Header } from "./components/Header/Header.component";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/Home/Home.component";
import { Latest } from "./pages/Latest";
import { Popular } from "./pages/Popular/Popular.component";
import { Single } from "./pages/Single";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/latest' element={<Latest />} />
        <Route path='/movie/:id' element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
