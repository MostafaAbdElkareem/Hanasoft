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
		return <h2>please select a currency pair</h2>;
	}
	return (
		<div className="dashboard">
			<h2>{`$${price}`}</h2>

			<div className="chart-container">
				<Line data={data} options={opts} />
			</div>
		</div>
	);
}

export default Chart;
