import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../../ipConfig';

import { Link } from 'react-router-dom';

import SingleCard from '../reuseableAdmin/SingleCard';
import "remixicon/fonts/remixicon.css";
import Chart from "react-apexcharts";

import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Today = () => {

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
        const response = await axios.post(`http://${API_URL}:3001/majorstatitical`, { month: month });
        const { result } = response.data;

        const groupedData = result.reduce((acc, currentItem) => {
          const { ten_loai, count, date_ut } = currentItem;
          const formatDate = new Date(date_ut);
          const formattedDate = formatDate.getDate();

          if (!acc[ten_loai]) {
            acc[ten_loai] = {
              ten_loai,
              count: [parseInt(count)],
              date_ut: [formattedDate]
            };
          } else {
            acc[ten_loai].count.push(parseInt(count));
            acc[ten_loai].date_ut.push(formattedDate);
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
          return { name: data.ten_loai, data: arrTemp };
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
            type="bar"
            height={500}

          />
        )}
      </div>
    </div>
  );
};



// const Today = () => {

//   const [totalMajor, setTotalMajor] = useState([])
//   const [major, setMajor] = useState()

//   const [arrMonth, setArrMonth] = useState([])
//   const [state, setState] = useState({
//     options: {
//       chart: {
//         id: "basic-bar"
//       },
//       xaxis: {
//         categories: []
//       }
//     },
//     series: []
//   });


//   useEffect(() => {
//     axios.post(`http://${API_URL}:3001/majorstatitical`)
//       .then((e) => {
//         console.log(e.data)
//         const soluong = e.data.result;
//         const loai = e.data.cate


//         const groupedData = soluong.reduce((acc, currentItem) => {
//           const { ten_loai, count, date_ut } = currentItem;
//           const formatDate = new Date(date_ut);


//           const formattedDate = formatDate.getDate();
//           const arrTemp = []
//           if (!acc[ten_loai]) {
//             acc[ten_loai] = {
//               ten_loai,
//               count: [parseInt(count)],
//               date_ut: [formattedDate]
//             };
//           } else {
//             acc[ten_loai].count.push(parseInt(count));
//             acc[ten_loai].date_ut.push(formattedDate);
//           }


//           return acc;
//         }, {});

//         const result = Object.values(groupedData);
//         console.log(result);

//         for (var i = 0; i < result.length; i++) {

//           const newFormData = [
//             { count: result[i].count, date_ut: result[i].date_ut },
//           ];
//           const arrTemp = Array.from({ length: 31 }, () => 0);
//           newFormData.forEach((item) => {
//             const { count, date_ut } = item;
//             date_ut.forEach((date, index) => {
//               if (date >= 1 && date <= 31) {
//                 arrTemp[date] = count[index];
//               }
//             });
//           });

//           console.log(arrTemp);

//           const dataTotal = {
//             name: result[i].ten_loai,
//             data: arrTemp
//           }
//           setMajor(dataTotal)
//         }






//       })
//       .catch((error) => {
//         console.log("ERROR line 47: " + error)
//       })
//   }, [])


//   useEffect(() => {
//     setState({
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
//         }
//       },
//       series: major || []
//     });
//   }, []);

//   // const [state , setState] = useState({
//   //   options: {
//   //     chart: {
//   //       id: "basic-bar"
//   //     },
//   //     xaxis: {
//   //       categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
//   //     }
//   //   },
//   //   series: [
//   //     {
//   //       name: "Job recruitment",
//   //       data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]
//   //     },
//   //     {
//   //       name: "Application",
//   //       data: [5, 10, 13, 17, 20, 24, 27, 30, 36, 45, 49, 55, 60, 65, 65, 67, 70, 70, 71, 80, 87, 89, 90, 91]
//   //     },
//   //     {
//   //       name: "Finacial",
//   //       data: [0, 0, 0, 0, 0, 0, 0, 40, 80, 80, 80, 80, 80, 160, 160, 160, 210, 210, 210, 210, 210, 210, 210 ,210]
//   //     },
//   //     // {
//   //     //   name: "Report",
//   //     //   data: [39, 20, 45, 30, 59, 30, 90, 101, 200]
//   //     // },
//   //   ]
//   // })
//   return (


//     <div className="dashboard__wrapper">
//       <div className="dashboard__cards">
//         <SingleCard item={card1Obj} />
//         <SingleCard item={card2Obj} />
//         <SingleCard item={card3Obj} />
//         <Link to='./diamondDashboard'><SingleCard item={card4Obj} /></Link>
//       </div>
//       <div className="mixed-chart">
//         {state.options && (
//           <Chart
//             options={state.options}
//             series={state.series}
//             type="line"
//             width="800"
//           />
//         )}
//       </div>
//     </div>


//     // <div>
//     //   <div className='stastistical__cards'>
//     //   <SingleCardForStatis item = {stastistical_card1_allTime}/>
//     //   <SingleCardForStatis item = {stastistical_card2_allTime}/>
//     //   <SingleCardForStatis item = {stastistical_card3_allTime}/>
//     //   <SingleCardForStatis item = {stastistical_card4_allTime}/>
//     // </div>
//     // {/* <div className="mixed-chart">
//     //         <Chart
//     //           options={state.options}
//     //           series={state.series}
//     //           type="line"
//     //           width="800"
//     //         />
//     //       </div> */}
//     // </div>

//   )
// }

export default Today