import { GaugeChart } from "@carbon/charts-react";
import { useState } from "react";
import data from "./data.js";
import options from "./options.js";

export default function CustomGaugeChart() {
  let [state, setState] = useState({
    data,
    options,
  });

  //   const [data, setData] = useState(_data);
  //   const [options, setOption] = useState(_options);
  //   console.log({ data, options });

  return <GaugeChart data={data} options={options}></GaugeChart>;
}
