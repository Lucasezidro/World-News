import { Outlet } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import Menu from "./components/Menu"


function App() {

  return (
    <>
      <Menu />
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App
