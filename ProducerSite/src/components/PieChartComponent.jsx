import React, { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

// Example crop sales data
const chartData = [
  { crop: "Wheat", quantity: 1200, fill: "#FF6F61" },
  { crop: "Rice", quantity: 1500, fill: "#FFD166" },
  { crop: "Tomato", quantity: 900, fill: "#06D6A0" },
  { crop: "Potato", quantity: 1300, fill: "#118AB2" },
  { crop: "Cabbage", quantity: 1100, fill: "#073B4C" },
];

function PieChartComponent() {
  const totalQuantity = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.quantity, 0);
  }, []);

  return (
    <div className="h-full card flex flex-col p-4 bg-white shadow-md rounded-lg h-[100%]">
      {/* Header */}
      <div className="card-header items-center pb-2 text-center">
        <h2 className="text-xl font-bold">Crop Sales Distribution</h2>
        <p className="text-gray-500">January - June 2024</p>
      </div>

      {/* Chart */}
      <div className="card-content flex-1">
        <div className="flex justify-center">
          <PieChart width={300} height={500}>
            <Pie
              data={chartData}
              dataKey="quantity"
              nameKey="crop"
              innerRadius={80}
              outerRadius={150}
              strokeWidth={2}
              isAnimationActive
            >
              <Label
                position="center"
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-gray-900 text-2xl font-bold"
                        >
                          {totalQuantity.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-gray-500 text-sm"
                        >
                          Total Quantity Sold
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer mt-4 text-center">
        <div className="text-green-600 flex justify-center items-center gap-2 font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-5 w-5" />
        </div>
        <p className="text-gray-500 mt-2">
          Showing crop sales for the last 2 months
        </p>
      </div>
    </div>
  );
}

export default PieChartComponent;
