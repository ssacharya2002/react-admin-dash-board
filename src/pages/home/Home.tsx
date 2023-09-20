import BarChartBox from "../../components/barChartBox/BarChartBox"
import BigBoxChart from "../../components/bigChartBox/BigBoxChart"
import ChartBox from "../../components/chartBox/ChartBox"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import TopBox from "../../components/topBox/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./Home.scss"
const Home = () => {
  return (
    <div className="home">
      
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><BigBoxChart /></div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      

    </div>
  )
}

export default Home