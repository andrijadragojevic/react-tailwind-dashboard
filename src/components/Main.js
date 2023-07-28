import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import React, { PureComponent } from "react";
import err from "../assets/error.png"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PieChartComponent from "./PieChartComponent";
import { Progress } from "antd";

const data_line = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 6908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 7800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "September",
    uv: 2000,
    pv: 7800,
    amt: 2290,
  },
  {
    name: "October",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "November",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "December",
    uv: 5000,
    pv: 6398,
    amt: 2310,
  },
];


function Main() {
  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC] ">
      <div className="flex items-center justify-between">
        <h1 className="text-[#5A5C69] text-[28px] leading-[34px] font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="flex items-center justify-center px-[30px] cursor-pointer bg-[#2E59D9] h-[32px] rounded-[3px] text-white">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
        <div className="flex items-center justify-around h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] cursor-pointer hover:shadow-lg transform hover:scale-[103%] tranition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              EARNINGS (MONTHLY)
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
        <div className="flex items-center justify-around h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] cursor-pointer hover:shadow-lg transform hover:scale-[103%] tranition duration-300 ease-out">
          <div>
            <h2 className="text-[#1CC88A] text-[11px] leading-[17px] font-bold">
              PENDING REQUESTS
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $240,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
        <div className="flex items-center justify-around h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] cursor-pointer hover:shadow-lg transform hover:scale-[103%] tranition duration-300 ease-out">
          <div>
            <h2 className="text-[#1CC88A] text-[11px] leading-[17px] font-bold">
              TASKS
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
        <div className="flex items-center justify-around h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] cursor-pointer hover:shadow-lg transform hover:scale-[103%] tranition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              EARNINGS (MONTHLY)
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5A5C69] mt-[5px]">
              $40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] bg-[#F8F9FC]">
            <h2 className="">Earnings Overview</h2>
            <FaEllipsisV />
          </div>
          <LineChart
            width={1170}
            height={500}
            data={data_line}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="flex items-center justify-between p-[15px] px-[20px] border-b-[1px] border-[#EDEDED] bg-[#F8F9FC]">
            <h2 className="">Revenue Resources</h2>
            <FaEllipsisV />
          </div>
          <div className="flex items-center justify-center">
            <PieChartComponent />
          </div>
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">

            <div className="basis-[55%] bg-white shadow-md cursor-pointer rounded-[4px]">
              <div className="flex items-center justify-between bg-[#F8F89FC] py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
                <h2 className="text-[#4E73DF] text-[16px] leading-[19px] font-bold">Projects Overview</h2>
                <FaEllipsisV />
              </div>

              <div className="px-[25px] space-y-[15px] py-[15px]">
              
              <div>
                <h2>Server Migrations</h2>
                <Progress percent={30} status="active" strokeColor="#E74A3B" />
              </div>
              <div>
                <h2>Sales Tracking</h2>
                <Progress percent={70} status="active" strokeColor="#F6C23E" />
              </div>
              <div>
                <h2>Customer Database</h2>
                <Progress percent={50} status="active" strokeColor="#4E73DF" />
              </div>
              <div>
                <h2>Payouts Made</h2>
                <Progress percent={100} strokeColor="#4E73DF" />
              </div>
              <div>
                <h2>Account Setup</h2>
                <Progress percent={40} status="exception" strokeColor="#36B9CC" />
              </div>

              </div>

            </div>

            <div className="basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]">
              <div className="flex items-center justify-between py-[15px] px-[20px] border-b-[1px]  border-[#EDEDED]">
                <h2 className="text-[#4E73DF] text-[16px] leading-[19px] font-bold">Resources</h2>
                <FaEllipsisV  />
              </div>
              <div className="flex items-center justify-center h-[100%] pl-[35px]">
                <div>
                  <img src={err} alt="" />
                  <p className="mt-[15px] font-semibold text-gray-500">No data available</p>
                </div>
              </div>
            </div>

      </div>

    </div>
  );
}

export default Main;
