import { VictoryPie, VictoryLabel } from "victory";

function ExpenseChart() {
  return (
    <VictoryPie
      colorScale={[]}
      data={[
        { x: "Expenses", y: 35 },
        { x: "Incomes", y: 40 },
      ]}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
