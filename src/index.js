import "regenerator-runtime/runtime";
import $ from "jquery";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

async function renderChart() {
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-dsp-charts-db-cjdvu"
  });

  const chart = sdk.createChart({
    chartId: "f2689102-2b30-425a-9ae2-af6df0d70902"
  });


  await chart.render(document.getElementById("chart"));

  $("#refresh").on("click", () => {
    chart.refresh();
  });

  $("#city-filter").on("change", e => {
    const city = e.target.value;
    city
      ? chart.setFilter({ "city": city })
      : chart.setFilter({});
  });
}

renderChart().catch(e => window.alert(e.message));
