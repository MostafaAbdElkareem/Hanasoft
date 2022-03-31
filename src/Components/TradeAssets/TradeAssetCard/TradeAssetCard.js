import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TradeAssetCard(props) {
	let statusColor = props.data.status === 'up' ? 'green' : 'red';
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
					{props.data.name}
				</Typography>
				<Typography variant="h5" component="div">
					{props.data.initial}
				</Typography>

				<Typography sx={{ fontSize: 18, fontWeight: 'bold', color: statusColor }} variant="body2">
					{props.data.current}{' '}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default TradeAssetCard;
