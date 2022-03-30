import React from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import TradeAssets from '../Components/TradeAssets/TradeAssets';
import TabCharts from '../Components/TabCharts/TabCharts';
import TradingForm from '../Components/TradingForm/TradingForm';
import MyWatchList from '../Components/MyWatchList/MyWatchList';
function Dashboard() {
	return (
		<>
		<Header></Header>
		<TradeAssets></TradeAssets>
<div><MyWatchList></MyWatchList></div>
		<div><TabCharts></TabCharts></div>
<div><TradingForm></TradingForm></div>
		<Footer></Footer>
		</>
	);
}

export default Dashboard;
