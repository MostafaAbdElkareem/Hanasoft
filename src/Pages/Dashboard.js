import React from 'react';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';
import TradeAssets from '../Components/TradeAssets/TradeAssets';
import TabCharts from '../Components/TabCharts/TabCharts';
import TradingForm from '../Components/TradingForm/TradingForm';
import MyWatchList from '../Components/MyWatchList/MyWatchList';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));
  
function Dashboard() {
	return (
		<>
		
		
		<Grid container spacing={2}>
  <Grid item xs={12}>
    <Item><Header></Header></Item>
  </Grid>
  <Grid item xs={12}>
    <Item><TradeAssets></TradeAssets></Item>
  </Grid>
  <Grid item xs={8}>
    <Item><TabCharts></TabCharts></Item>
  </Grid>
  <Grid item xs={4}>
    <Item><TradingForm></TradingForm></Item>
  </Grid>
</Grid>
		
		
<div><MyWatchList></MyWatchList></div>
		
<div></div>
		<Footer></Footer>
		</>
	);
}

export default Dashboard;
