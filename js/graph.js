//< " НАСТРОЙКИ ГРАФИКОВ (ПЕРЕМЕННЫЕ) " >=============================================================================================================>//
const typeGraph = 'line';
const labelGraph = 'Цена (ORC/BNB)';
const backgroundColorGraph = ['rgba(0, 119, 255, 0.15)'];
const borderColorGraph = '#0075FF';
const borderWidthGraph = 2;
const fillGraph = true;
const pointRadiusGraph = 0;
const gridBorderColorYGraph = "#ffffff33";
const gridBorderColorXGraph = "transparent";
Chart.defaults.font.size = 12;
Chart.defaults.color = "rgba(255, 255, 255, 0.6)";

//< " НАСТРОЙКА КАСТОМНЫЙ ТУЛТИПОВ " >=============================================================================================================>//
const external = (context) => {
	if (window.innerWidth > 1330.2) {
		let tooltipEl = document.getElementById('graph-tooltip');

		if (!tooltipEl) {
			tooltipEl = document.createElement('div');
			tooltipEl.id = 'graph-tooltip';
			tooltipEl.innerHTML = '<table></table>';
			document.body.appendChild(tooltipEl);
		}

		const tooltipModel = context.tooltip;
		if (tooltipModel.opacity === 0) {
			tooltipEl.style.opacity = 0;
			return;
		}

		tooltipEl.classList.remove('above', 'below', 'no-transform');
		if (tooltipModel.yAlign) {
			tooltipEl.classList.add(tooltipModel.yAlign);
		} else {
			tooltipEl.classList.add('no-transform');
		}

		function getBody(bodyItem) {
			return bodyItem.lines;
		}

		if (tooltipModel.body) {
			const titleLines = tooltipModel.title || [];
			const bodyLines = tooltipModel.body.map(getBody);

			let innerHtml = '<thead>';

			titleLines.forEach(function (title) {
				innerHtml += '<tr class="graph-tooltip__data"><th>' + title + '</th></tr>';
			});
			innerHtml += '</thead><tbody>';

			bodyLines.forEach(function (body) {
				innerHtml += '<tr class="graph-tooltip__text"><td>' + body + '</td></tr>';
			});
			innerHtml += '</tbody>';

			let tableRoot = tooltipEl.querySelector('table');
			tableRoot.innerHTML = innerHtml;
		}

		const position = context.chart.canvas.getBoundingClientRect();

		tooltipEl.style.opacity = 1;
		tooltipEl.style.position = 'absolute';
		tooltipEl.style.transform = "translateY(-50%)";
		tooltipEl.style.marginLeft = "15px";
		tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
		tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
		tooltipEl.style.pointerEvents = 'none';
	}
}

const label = (context) => {
	let label = context.dataset.label || '';

	if (label) {
		label += ': ';
	}
	if (context.parsed.y !== null) {
		label += new Intl.NumberFormat('RUB', { style: 'currency', currency: 'RUB' }).format(context.parsed.y);
	}
	return label;
}

//< " ГРАФИК №1 (Всё) " >=============================================================================================================>//
const ctxFirst = document.getElementById("graph-1");
ctxFirst.height = `${ctxFirst.parentElement.height}`;
ctxFirst.width = `${ctxFirst.parentElement.width}`;

const myChartFirst = new Chart(ctxFirst, {
	type: typeGraph,
	data: {
		labels: ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12'],
		datasets: [{
			label: labelGraph,
			data: [2800, 2200, 1500, 1200, 1400, 1900, 2100, 2200, 2600, 1700, 1200, 2500],
			backgroundColor: backgroundColorGraph,
			borderColor: borderColorGraph,
			borderWidth: borderWidthGraph,
			color: "#fff",
			fill: fillGraph,
			pointRadius: pointRadiusGraph,
			pointBackgroundColor: borderColorGraph,
			pointBorderWidth: 1,
			pointHoverRadius: 4,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					borderDash: [3, 3],
					borderColor: "transparent",
					color: gridBorderColorYGraph,
				}
			},
			x: {
				grid: {
					borderColor: "transparent",
					color: gridBorderColorXGraph,
				}
			}
		},
		interaction: {
			intersect: false,
			mode: 'index',
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				external: external,
				callbacks: {
					label: label,
				}
			}
		}
	}
});

//< " ГРАФИК №2 (1Д) " >=============================================================================================================>//
const ctxSecond = document.getElementById("graph-2");
ctxSecond.height = `${ctxSecond.parentElement.height}`;
ctxSecond.width = `${ctxSecond.parentElement.width}`;

const myChartSecond = new Chart(ctxSecond, {
	type: typeGraph,
	data: {
		labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '19:00', '10:00', '11:00'],
		datasets: [{
			label: labelGraph,
			data: [1800, 1600, 1850, 1700, 1850, 1220, 1820, 1700, 1650, 1850, 1920, 1970],
			backgroundColor: backgroundColorGraph,
			borderColor: borderColorGraph,
			borderWidth: borderWidthGraph,
			color: "#fff",
			fill: fillGraph,
			pointRadius: pointRadiusGraph,
			pointBackgroundColor: borderColorGraph,
			pointBorderWidth: 1,
			pointHoverRadius: 4,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					borderDash: [3, 3],
					borderColor: "transparent",
					color: gridBorderColorYGraph,
				}
			},
			x: {
				grid: {
					borderColor: "transparent",
					color: gridBorderColorXGraph,
				}
			}
		},
		interaction: {
			intersect: false,
			mode: 'index',
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				external: external,
				callbacks: {
					label: label,
				}
			}
		}
	}
});

//< " ГРАФИК №3 (4Ч) " >=============================================================================================================>//
const ctxThird = document.getElementById("graph-3");
ctxThird.height = `${ctxThird.parentElement.height}`;
ctxThird.width = `${ctxThird.parentElement.width}`;

const myChartThird = new Chart(ctxThird, {
	type: typeGraph,
	data: {
		labels: ['01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00'],
		datasets: [{
			label: labelGraph,
			data: [1200, 1350, 1300, 1900, 1550, 1620, 1920],
			backgroundColor: backgroundColorGraph,
			borderColor: borderColorGraph,
			borderWidth: borderWidthGraph,
			color: "#fff",
			fill: fillGraph,
			pointRadius: pointRadiusGraph,
			pointBackgroundColor: borderColorGraph,
			pointBorderWidth: 1,
			pointHoverRadius: 4,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					borderDash: [3, 3],
					borderColor: "transparent",
					color: gridBorderColorYGraph,
				}
			},
			x: {
				grid: {
					borderColor: "transparent",
					color: gridBorderColorXGraph,
				}
			}
		},
		interaction: {
			intersect: false,
			mode: 'index',
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				external: external,
				callbacks: {
					label: label,
				}
			}
		}
	}
});

//< " ГРАФИК №4 (1Ч) " >=============================================================================================================>//
const ctxFourth = document.getElementById("graph-4");
ctxFourth.height = `${ctxFourth.parentElement.height}`;
ctxFourth.width = `${ctxFourth.parentElement.width}`;

const myChartFourth = new Chart(ctxFourth, {
	type: typeGraph,
	data: {
		labels: ['01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00'],
		datasets: [{
			label: labelGraph,
			data: [1500, 1600, 1450, 1750, 1850, 1620, 1720],
			backgroundColor: backgroundColorGraph,
			borderColor: borderColorGraph,
			borderWidth: borderWidthGraph,
			color: "#fff",
			fill: fillGraph,
			pointRadius: pointRadiusGraph,
			pointBackgroundColor: borderColorGraph,
			pointBorderWidth: 1,
			pointHoverRadius: 4,
		}]
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					borderDash: [3, 3],
					borderColor: "transparent",
					color: gridBorderColorYGraph,
				}
			},
			x: {
				grid: {
					borderColor: "transparent",
					color: gridBorderColorXGraph,
				}
			}
		},
		interaction: {
			intersect: false,
			mode: 'index',
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				external: external,
				callbacks: {
					label: label,
				}
			}
		}
	}
});