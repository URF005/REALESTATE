import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistick = () => {
  const data = [
    { name: "NFTs", count: 309 },
    { name: "Creators", count: 508 },
    { name: "Earnings", count: 1032 },
    { name: "Sellers", count: 650 },
  ];

  return (
    <div className="rn-statistick-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <div className="col-12 text-center">
            <h3>Qreal Statistics</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3498db" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistick;
