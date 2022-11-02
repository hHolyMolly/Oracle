const ctxFirst = document.getElementById("graph-1");
ctxFirst.height = `${ctxFirst.parentElement.height}`;
ctxFirst.width = `${ctxFirst.parentElement.width}`;

const myChartFirst = new Chart(ctxFirst, {
	type: 'line',
	data: {
		labels: ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'],
		datasets: [{
			label: 'Цена (ORC/BNB)',
			data: [2800, 2200, 1500, 1200, 1400, 1900, 2100, 2200, 2600, 1700, 1200, 2500],
			backgroundColor: 'rgba(0, 119, 255, 0.15)',
			borderColor: '#0075FF',
			borderWidth: 1,
			fill: true,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						let label = context.dataset.label || '';

						if (label) {
							label += ': ';
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format(context.parsed.y);
						}
						return label;
					}
				}
			}
		}
	}
});

// ==========================================================================================================

const ctxSecond = document.getElementById("graph-2");
ctxSecond.height = `${ctxSecond.parentElement.height}`;
ctxSecond.width = `${ctxSecond.parentElement.width}`;

const myChartSecond = new Chart(ctxSecond, {
	type: 'line',
	data: {
		labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '019:00', '10:00', '11:00', '12:00',],
		datasets: [{
			label: 'Цена (ORC/BNB)',
			data: [1800, 1600, 1850, 1700, 1850, 1620, 1820, 1700, 1650, 1850, 1920, 1970,],
			backgroundColor: 'rgba(0, 119, 255, 0.15)',
			borderColor: '#0075FF',
			borderWidth: 1,
			fill: true,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						let label = context.dataset.label || '';

						if (label) {
							label += ': ';
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format(context.parsed.y);
						}
						return label;
					}
				}
			}
		}
	}
});

// ==========================================================================================================

const ctxThird = document.getElementById("graph-3");
ctxThird.height = `${ctxThird.parentElement.height}`;
ctxThird.width = `${ctxThird.parentElement.width}`;

const myChartThird = new Chart(ctxThird, {
	type: 'line',
	data: {
		labels: ['01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00'],
		datasets: [{
			label: 'Цена (ORC/BNB)',
			data: [1800, 1600, 1850, 1700, 1850, 1620, 1720],
			backgroundColor: 'rgba(0, 119, 255, 0.15)',
			borderColor: '#0075FF',
			borderWidth: 1,
			fill: true,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						let label = context.dataset.label || '';

						if (label) {
							label += ': ';
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format(context.parsed.y);
						}
						return label;
					}
				}
			}
		}
	}
});

// ==========================================================================================================

const ctxFourth = document.getElementById("graph-4");
ctxFourth.height = `${ctxFourth.parentElement.height}`;
ctxFourth.width = `${ctxFourth.parentElement.width}`;

const myChartFourth = new Chart(ctxFourth, {
	type: 'line',
	data: {
		labels: ['01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00'],
		datasets: [{
			label: 'Цена (ORC/BNB)',
			data: [1500, 1600, 1450, 1750, 1850, 1620, 1720],
			backgroundColor: 'rgba(0, 119, 255, 0.15)',
			borderColor: '#0075FF',
			borderWidth: 1,
			fill: true,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						let label = context.dataset.label || '';

						if (label) {
							label += ': ';
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format(context.parsed.y);
						}
						return label;
					}
				}
			}
		}
	}
});