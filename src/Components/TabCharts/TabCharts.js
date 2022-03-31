import React, { useEffect, useState } from 'react';
import ApexChart from './Chart';

function TabCharts() {
	const [ data, updateData ] = useState([ 1, 2, 3, 4 ]);
	/* const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'cryptodeck.p.rapidapi.com',
			'X-RapidAPI-Key': 'a174c60682msh130eee9f8fafb06p1042a9jsncd8345f803c1'
		}
	}; */
	useEffect(
		() => {
			setInterval(() => {
				const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
				let array = [ ...data, val ];
				array.shift();
				updateData(array);
			}, 2000);
		},
		[ data ]
	);
	return (
		<div>
			Tab Charts
			<ApexChart data={data} />
		</div>
	);
}

export default TabCharts;
