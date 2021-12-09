import './genericStyles.css'
import Header from "./components/Header/Header"
import Partners from './components/Partners/Partners'
import {users} from './CardsData'
function App() {
  return (
    <div className="wrapper">
        <Header
         userName={users.currentUser.name}
         id={users.currentUser.id}
         avatar={users.currentUser.avatar}
         />
        <Partners />
      </div>
  );
}

export default App;
