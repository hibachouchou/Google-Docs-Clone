import { TextEditor } from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"


export const Home = () => {
  // Use Navigate for redirection
  return  <Navigate to={`/documents/${uuidV4()}`} />
};


function App() {
  return (
    <div >
<h2 style={{textAlign:'center'}}>My Document Editor</h2>
<Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documents/:id" element={ <TextEditor/>} />
      </Routes>
    </Router>
 <h6 style={{textAlign:'center'}}> © 2024 Google Docs -  Hiba Chouchene</h6>
    </div>
  );
}

export default App;
