import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import SingleCard from '../reuseableAdmin/SingleCard';
import "remixicon/fonts/remixicon.css";
import Chart from "react-apexcharts";
import axios from 'axios';
import { API_URL } from '../../ipConfig';
const card1Obj = {
  title: "Vị trí 1",
  totalNumber: '07',
};
const card2Obj = {
  title: "Vị trí 2",
  totalNumber: '3,4K',
};
const card3Obj = {
  title: "Vị trí 3",
  totalNumber: '09',
};
const card4Obj = {
  title: "Vị trí 4",
  totalNumber: '499',
};


const ThisWeek = () => {
  
  const [state, setState] = useState({
    options: {
      chart: {
        zoom: {
          enabled: true,
          type: 'x'
        },
        id: "basic-bar"
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
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
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
        const response = await axios.post(`http://${API_URL}:3001/positionstatitical`, { month: month });
        const { result } = response.data;
        const groupedData = result.reduce((acc, currentItem) => {
          const { ten_vitri, count, date_ut } = currentItem;
          const formatDate = new Date(date_ut);
          const formattedDate = formatDate.getDate();

          if (!acc[ten_vitri]) {
            acc[ten_vitri] = {
              ten_vitri,
              count: [parseInt(count)],
              date_ut: [formattedDate]
            };
          } else {
            acc[ten_vitri].count.push(parseInt(count));
            acc[ten_vitri].date_ut.push(formattedDate);
          }

          return acc;
        }, {});

        const resultData = Object.values(groupedData);
        console.log(resultData);

        const seriesData = resultData.map((data) => {
          const arrTemp = Array.from({ length: 31 }, () => 0);
          data.date_ut.forEach((date, index) => {
            if (date >= 1 && date <= 31) {
              arrTemp[date - 1] = data.count[index];
            }
          });
          return { name: data.ten_vitri, data: arrTemp };
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
          borderRadius: 16
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
      <div className="mixed-chart">
        {state.options && (
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            height={500}

          />
        )}
      </div>
    </div>
  );
}

export default ThisWeek
