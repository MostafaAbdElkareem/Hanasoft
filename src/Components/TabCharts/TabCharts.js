import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Chart from './Chart';
import { formatData } from '../../Utlis/utils';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function TabCharts() {
	/* data and pairs */
	const [ currencies, setcurrencies ] = useState([]);
	const [ pair, setpair ] = useState('');
	const [ price, setprice ] = useState('0.00');
	const [ pastData, setpastData ] = useState({});
	const [ value, setValue ] = useState('1');
	const ws = useRef(null);

	let first = useRef(false);
	const url = 'https://api.pro.coinbase.com';
	useEffect(() => {
		ws.current = new WebSocket('wss://ws-feed.pro.coinbase.com');

		let pairs = [];

		const apiCall = async () => {
			await fetch(url + '/products').then((res) => res.json()).then((data) => (pairs = data));
			let filtered = pairs.filter((pair) => {
				if (pair.quote_currency === 'USD') {
					return pair;
				}
			});
			filtered = filtered.sort((a, b) => {
				if (a.base_currency < b.base_currency) {
					return -1;
				}
				if (a.base_currency > b.base_currency) {
					return 1;
				}
				return 0;
			});
			setcurrencies(filtered);
			first.current = true;
		};
		apiCall();
	}, []);
	useEffect(
		() => {
			if (!first.current) {
				return;
			}

			let msg = {
				type: 'subscribe',
				product_ids: [ pair ],
				channels: [ 'ticker' ]
			};
			let jsonMsg = JSON.stringify(msg);
			ws.current.send(jsonMsg);

			let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
			const fetchHistoricalData = async () => {
				let dataArr = [];
				await fetch(historicalDataURL).then((res) => res.json()).then((data) => (dataArr = data));

				let formattedData = formatData(dataArr);
				setpastData(formattedData);
			};

			fetchHistoricalData();

			ws.current.onmessage = (e) => {
				let data = JSON.parse(e.data);
				if (data.type !== 'ticker') {
					return;
				}

				if (data.product_id === pair) {
					setprice(data.price);
				}
			};
		},
		[ pair ]
	);

	const handleSelect = (e, newValue) => {
		let unsubMsg = {
			type: 'unsubscribe',
			product_ids: [ pair ],
			channels: [ 'ticker' ]
		};
		let unsub = JSON.stringify(unsubMsg);
		ws.current.send(unsub);
		console.log(e.target.value);
		setpair(e.target.value);
		setValue(newValue);
	};
	/*  */

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Select currency</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							name="currency"
							value={pair}
							onChange={handleSelect}
						>
							{currencies.map((cur, idx) => {
								return <MenuItem value={cur.id}>{cur.display_name}</MenuItem>;
							})}
						</Select>
					</FormControl>
				</Box>
				<Chart price={price} data={pastData} />
			</TabContext>
		</Box>
	);
}

export default TabCharts;
