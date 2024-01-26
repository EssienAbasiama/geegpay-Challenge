import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "./chart.css";

const colors = [
  "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)",
];

const data = [
  {
    name: "Jan",
    uv: "6.000",
    tickCount: 5,
  },
  {
    name: "Feb",
    uv: "15.000",
    tickCount: 10,
  },
  {
    name: "Mar",
    uv: "12.000",
    tickCount: 15,
  },
  {
    name: "Apr",
    uv: "25.000",
    tickCount: 20,
  },
  {
    name: "May",
    uv: "18.000",
    tickCount: 25,
  },
  {
    name: "Jun",
    uv: "45.000",
    tickCount: 30,
  },
  {
    name: "Jul",
    uv: "10.000",
    tickCount: 35,
  },
  {
    name: "Aug",
    uv: "20.000",
    tickCount: 40,
  },
  {
    name: "Sep",
    uv: "30.000",
    tickCount: 45,
  },
  {
    name: "Oct",
    uv: "7.000",
    tickCount: 50,
  },
  {
    name: "Nov",
    uv: "30.000",
    tickCount: 55,
  },
  {
    name: "Dec",
    uv: "25.000",
    tickCount: 60,
  },
];

const CustomYAxisTick = ({ x, y, payload, darkModeTheme }) => {
  const { value } = payload;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill={darkModeTheme ? "rgb(189, 187, 187)" : "#525252"} // Conditionally set fill color based on darkModeTheme
        style={{
          fontFamily: "Plus Jakarta Sans",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {value === 0 ? value.toFixed(0) : value.toFixed(3)}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const uv = payload[0].value;

    return (
      <div className="custom-tooltip" style={{ fontSize: "12px" }}>
        <div className="arrow-down"></div>
        <p className="uv" style={{ color: "white" }}>{`$ ${uv}`}</p>
      </div>
    );
  }
  return null;
};

const GradientBar = ({ fill, x, y, width, height }) => {
  return (
    <g>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#34CAA5", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#34CAA5", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`url(#gradient)`}
        radius={[20, 20, 0, 0]}
      />
    </g>
  );
};

export default function Charts({ darkModeTheme }) {
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Adjust the height based on the screen width
      if (screenWidth <= 1122) {
        setChartHeight(270);
      } else {
        setChartHeight(300); // Default height for larger screens
      }
    };

    // Update the chart height on mount and when the window is resized
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart
        width="fit-content"
        height={300}
        data={data}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <CartesianGrid
          stroke={darkModeTheme ? "#555" : "#ddd"}
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          tickCount={12}
          tick={{
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "22px",
            fill: darkModeTheme ? "rgb(189, 187, 187)" : "#525252",
            textAlign: "center",
            color: "#525252",
          }}
          tickSize={0}
          tickMargin={20}
          axisLine={false}
        />
        <YAxis
          dataKey="uv"
          tick={<CustomYAxisTick darkModeTheme={darkModeTheme} />} // Pass darkModeTheme as a prop
          tickCount={9}
          tickSize={0}
          tickMargin={35}
          axisLine={false}
          domain={[0, 50.0]}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          wrapperStyle={{
            //   background: "black",
            background: darkModeTheme ? "white" : "black",
            position: "absolute",
            top: "-60px",
            left: "-48px",
            transform: "translate(-50%, -100%)",
            borderRadius: "10px",
            cursor: "pointer",
            color: "black",
          }}
          content={<CustomTooltip />}
        />
        <Bar
          dataKey="uv"
          fill={
            darkModeTheme
              ? "rgba(52, 202, 165, 0.80)"
              : "rgba(52, 202, 165, 0.50)"
          } // Change "your-dark-mode-color" to the color you want for dark mode
          opacity={0.5}
          radius={[20, 20, 0, 0]}
          activeBar={<GradientBar />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
