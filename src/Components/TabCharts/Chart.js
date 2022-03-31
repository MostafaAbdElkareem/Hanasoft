import React from 'react';
import { Line } from 'react-chartjs-2';
function Chart({ price, data }) {
	const opts = {
		tooltips: {
			intersect: false,
			mode: 'index'
		},
		responsive: true,
		maintainAspectRatio: true
	};
	if (price === '0.00') {
		return <h4>please select a currency pair</h4>;
	}
	return (
		<div className="dashboard">
			<h4>{`$${price}`}</h4>

			<Line data={data} options={opts} />
		</div>
	);
}

export default Chart;
