export const formatData = (data) => {
	let finalData = {
		labels: [],
		datasets: [
			{
				label: 'Price',
				data: [],
				fill: true,
				backgroundColor: '#d5cc656b',
				borderColor: 'rgba(75,192,192,1)'
			}
		]
	};

	let dates = data.map((val) => {
		const ts = val[0];
		let date = new Date(ts * 1000);
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		let final = `${month}-${day}-${year}`;
		return final;
	});

	let priceArr = data.map((val) => {
		return val[4];
	});

	priceArr.reverse();
	dates.reverse();
	finalData.labels = dates;
	finalData.datasets[0].data = priceArr;

	return finalData;
};
