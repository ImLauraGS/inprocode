import Chart from "./components/Chart"
import LangChange from "./components/LangChange"
import PrevTotal from "./components/PrevTotal"
import Total from "./components/Total"
import WeeklyGraph from "./components/WeeklyGraph"

function App() {

  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-12">
      <LangChange/>
      <Total/>
      <Chart/>
    </div>
  )
}

export default App
