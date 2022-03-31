import React from 'react';
import Chart from 'react-apexcharts';

export default function ApexChart(props) {
	const series = [
		{
			name: 'xx',
			data: props.data
		}
	];
	const options = {
		chart: {
			height: 350,
			type: 'line',
			zoom: {
				enabled: true
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 1.5,
			curve: 'smooth'
		},
		tooltip: {
			enabled: true,
			enabledOnSeries: undefined,
			shared: true,
			followCursor: false,
			intersect: false,
			inverseOrder: false,
			custom: undefined,
			fillSeriesColor: false,
			theme: false,
			style: {
				fontSize: '12px',
				fontFamily: undefined
			},
			// onDatasetHover: {
			//   highlightDataSeries: false,
			// },
			x: {
				show: true,
				formatter: undefined
			},
			y: {
				formatter: undefined,
				title: {
					formatter: (seriesName) => seriesName
				}
			},
			z: {
				formatter: undefined,
				title: 'Size: 20px'
			},
			marker: {
				show: true
			}
		},
		colors: [ '#210124' ],
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: true,
				gradientToColors: [ '#DB162F' ],
				opacityFrom: 1,
				opacityTo: 1,
				type: 'vertical',
				stops: [ 0, 30 ]
			}
		},
		grid: {
			show: true,
			// borderColor: ['#e5e5e5', '#90A4AE'],
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			}
			// column: {
			//   colors: ['#e5e5e5', 'transparent', 'transparent', 'transparent'],
			//   opacity: 0.5
			// },
		},
		xaxis: {
			type: 'category',
			interval: 10,
			// tickAmount: 50,
			show: true,
			labels: {
				show: true
			},
			lines: {
				show: true
			}
		},
		yaxis: {
			show: false
		},

		legend: {
			show: false
		}
	};
	return (
		<div>
			<Chart options={options} series={series} type="line" height={350} />
		</div>
	);
}
