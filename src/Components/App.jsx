import UserContextProvider from "../Context/UserContext"
import Content from "./Content/Content"
import Header from "./Header/Header"
import Tools from "./Tools/Tools"


function App() {
  

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Tools />
        <Content />
      </UserContextProvider>
    </div>
  )
}

export default App
