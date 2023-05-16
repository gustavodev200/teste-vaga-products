import { FinalizePayment, Products } from "./pages";
import { Routes, Route} from "react-router-dom";

function App() {

  return (
   
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/finalize-payment" element={<FinalizePayment />} />
      </Routes>
   
  )
}

export default App;
