import { useBackendData } from "./List.tsx";
import { ReceiveArray } from "./JSX_recieve_array.tsx";


function App() {
  const data = useBackendData()
  return (
  <ReceiveArray/>

)};

export default App