am4core.useTheme(am4themes_animated)

const chart = am4core.create('chart_div', am4charts.XYChart)

chart.data = [
  {
    category: 'One',
    value1: 1,
    value2: 5,
    value3: 3,
    value4: 3,
  },
  {
    category: 'Two',
    value1: 2,
    value2: 5,
    value3: 3,
    value4: 4,
  },
  {
    category: 'Three',
    value1: 3,
    value2: 5,
    value3: 4,
    value4: 4,
  },
  {
    category: 'Four',
    value1: 4,
    value2: 5,
    value3: 6,
    value4: 4,
  },
  {
    category: 'Five',
    value1: 3,
    value2: 5,
    value3: 4,
    value4: 4,
  },
  {
    category: 'Six',
    value1: 8,
    value2: 7,
    value3: 10,
    value4: 4,
  },
  {
    category: 'Seven',
    value1: 10,
    value2: 8,
    value3: 6,
    value4: 4,
  },
]

chart.legend = new am4charts.Legend()
chart.colors.step = 2

const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
categoryAxis.dataFields.category = 'category'
categoryAxis.renderer.grid.template.location = 0

const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
valueAxis.min = 0
valueAxis.renderer.minWidth = 35

const series1 = chart.series.push(new am4charts.ColumnSeries())
series1.columns.template.width = am4core.percent(80)
series1.columns.template.tooltipText = '{name}: {valueY.value}'
series1.name = 'Series 1'
series1.dataFields.categoryX = 'category'
series1.dataFields.valueY = 'value1'
series1.stacked = true

const series2 = chart.series.push(new am4charts.ColumnSeries())
series2.columns.template.width = am4core.percent(80)
series2.columns.template.tooltipText = '{name}: {valueY.value}'
series2.name = 'Series 2'
series2.dataFields.categoryX = 'category'
series2.dataFields.valueY = 'value2'
series2.stacked = true

const series3 = chart.series.push(new am4charts.ColumnSeries())
series3.columns.template.width = am4core.percent(80)
series3.columns.template.tooltipText = '{name}: {valueY.value}'
series3.name = 'Series 3'
series3.dataFields.categoryX = 'category'
series3.dataFields.valueY = 'value3'
series3.stacked = true

const series4 = chart.series.push(new am4charts.ColumnSeries())
series4.columns.template.width = am4core.percent(80)
series4.columns.template.tooltipText = '{name}: {valueY.value}'
series4.name = 'Series 4'
series4.dataFields.categoryX = 'category'
series4.dataFields.valueY = 'value4'
series4.stacked = true

chart.scrollbarX = new am4core.Scrollbar()

chart.exporting.menu = new am4core.ExportMenu()
