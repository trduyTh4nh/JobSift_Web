import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import SingleCard from '../reuseableAdmin/SingleCard';
import "remixicon/fonts/remixicon.css";
import Chart from "react-apexcharts";
import axios from 'axios';
import { API_URL } from '../../ipConfig';
const card1Obj = {
  title: "Tổng doanh thu",
  totalNumber: '07',
};




const ThisMonth = () => {
  const [sumOfMonth, setSumOfMonth] = useState(0);
  const [state, setState] = useState({
    options: {
      chart: {
        zoom: {
          enabled: true,
          type: 'x'
        },
        id: "basic-bar",
        height: 350,
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
      },
      xaxis: {
        categories: []
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          type: 'bar',
          height: 350,
          borderRadius: 4,

        },
        stroke: {
          curve: 'smooth'
        },
        
      },
      dataLabels: {
        enabled: false
      },
    },
    series: []
  });
  const [month, setMonth] = useState(11)


  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setMonth(selectedMonth);
  };

  useEffect(() => {

    console.log("MOTH TRANFERed: " + month)
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://${API_URL}:3001/finalcialstatitical`, { month: month });
        const { result, sumTotal } = response.data;
        setSumOfMonth(sumTotal.sum)
        const groupedData = result.reduce((acc, currentItem) => {
          const { amount_diamond, sum, date_pay } = currentItem;
          const formatDate = new Date(date_pay);
          const formattedDate = formatDate.getDate();

          if (!acc[amount_diamond]) {
            acc[amount_diamond] = {
              amount_diamond,
              sum: [parseInt(sum)],
              date_pay: [formattedDate]
            };
          } else {
            acc[amount_diamond].sum.push(parseInt(sum));
            acc[amount_diamond].date_pay.push(formattedDate);
          }

          return acc;
        }, {});

        const resultData = Object.values(groupedData);
        console.log(resultData);

        const seriesData = resultData.map((data) => {
          const arrTemp = Array.from({ length: 31 }, () => 0);
          data.date_pay.forEach((date, index) => {
            if (date >= 1 && date <= 31) {
              arrTemp[date - 1] = data.sum[index];
            }
          });
          return { name: data.amount_diamond, data: arrTemp };
        });

        setState({
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: Array.from({ length: 31 }, (_, i) => i + 1)
            }
          },
          series: seriesData
        });
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [month]);

  return (
    <div className="dashboard__wrapper">
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}>
        <h3>Hiển thị tình trạng theo: </h3>
        <select style={{
          padding: 10,
          borderWidth: 2,
          borderRadius: 16,
        }}
          value={month}
          onChange={handleMonthChange}>
          <option value={1}>Tháng 1</option>
          <option value={2}>Tháng 2</option>
          <option value={3}>Tháng 3</option>
          <option value={4}>Tháng 4</option>
          <option value={5}>Tháng 5</option>
          <option value={6}>Tháng 6</option>
          <option value={7}>Tháng 7</option>
          <option value={8}>Tháng 8</option>
          <option value={9}>Tháng 9</option>
          <option value={10}>Tháng 10</option>
          <option value={11}>Tháng 11</option>
          <option value={12}>Tháng 12</option>
        </select>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
      }}>
        <h2>Tổng tiền của tháng: </h2>
        <h3>{sumOfMonth}</h3>
      </div>
      <div className="mixed-chart">
        {state.options && (
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={500}

          />
        )}
      </div>
    </div>
  );
}

export default ThisMonth
