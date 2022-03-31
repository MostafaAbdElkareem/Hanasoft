import { Grid } from '@mui/material';
import React from 'react';
import TradeAssetCard from '../TradeAssetCard/TradeAssetCard';

function AssetCarousel() {
	const assets = [
		{
			name: 'Trade asset 01',
			initial: 2.0,
			current: 1.9,
			status: 'down'
		},
		{
			name: 'Trade asset 02',
			initial: 2.0,
			current: 1.9,
			status: 'up'
		},
		{
			name: 'Trade asset 03',
			initial: 2.0,
			current: 1.9,
			status: 'up'
		},
		{
			name: 'Trade asset 04',
			initial: 2.0,
			current: 3.9,
			status: 'down'
		},
		{
			name: 'Trade asset 05',
			initial: 2.0,
			current: 5.9,
			status: 'up'
		},
		{
			name: 'Trade asset 05',
			initial: 2.0,
			current: 5.9,
			status: 'up'
		}
	];
	const carousel = assets.map((asset, index) => (
		<Grid item xs={2} key={index}>
			<TradeAssetCard data={asset} />
		</Grid>
	));
	return (
		<Grid container spacing={2}>
			{carousel}
		</Grid>
	);
}

export default AssetCarousel;
