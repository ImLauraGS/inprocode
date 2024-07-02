import Chart from "./components/Chart"
import PrevTotal from "./components/PrevTotal"
import Total from "./components/Total"
import WeeklyGraph from "./components/WeeklyGraph"

function App() {

  return (
    <div className="flex flex-col justify-center items-center">
      <Total/>
      <Chart/>
    </div>
  )
}

export default App
