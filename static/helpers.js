
function clearChart(chart,title){
    chart.data.labels=[]
    for(i=0;i<chart.data.datasets.length;i++)
			chart.data.datasets[i].data=[]
	chart.options.title.text=title
}

