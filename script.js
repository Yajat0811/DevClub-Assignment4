console.log("Loaded script.js");
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
};
const DATA_COUNT = 30;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.date({count:30});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Active Cases',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Recovered',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
     {
      label: 'Deaths',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
