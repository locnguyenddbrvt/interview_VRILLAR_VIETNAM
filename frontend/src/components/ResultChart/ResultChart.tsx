import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { Typography } from "@mui/joy";
import { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { Box, Switch } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ResultChart() {
  const [dataRes, setDataRes] = useState<any>(null);
  const [switchState, setSwitchState] = useState<boolean>(true);
  const [dataTable, setDataTable] = useState<{
    labels: string[];
    datasets: any[];
  }>();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  const labels = useMemo(
    () => [
      "Round 1",
      "Round 2",
      "Round 3",
      "Round 4",
      "Round 5",
      "Round 6",
      "Round 7",
      "Round 8",
      "Round 9",
      "Round 10",
      "Round 11",
      "Round 12",
      "Round 13",
      "Round 14",
      "Round 15",
      "Round 16",
      "Round 17",
      "Round 18",
      "Round 19",
      "Round 20",
    ],
    []
  );

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + `api/2023/chart-result/all-year`)
      .then((response) => {
        setDataRes(response.data);
        const handleData: {
          label: string;
          data: number[];
          borderColor: string;
          backgroundColor: string;
        }[] = response.data.map((el: any, ind: number) => {
          let point: number = 0;

          const numRand_1: number = faker.datatype.number({
            min: 0,
            max: 255,
          });
          const numRand_2: number = faker.datatype.number({
            min: 0,
            max: 255,
          });
          const numRand_3: number = faker.datatype.number({
            min: 0,
            max: 255,
          });

          return {
            label: el.driverName,
            data: el.data.map(
              (roundData: { round: string; point: string }, ind: number) => {
                point += Number(roundData.point);
                return point;
              }
            ),
            borderColor: `rgb(${numRand_1}, ${numRand_2}, ${numRand_3})`,
            backgroundColor: `rgba(${numRand_1}, ${numRand_2}, ${numRand_3}, 0.5)`,
            hidden: ind < 10 && true,
          };
        });
        setDataTable({
          labels: labels,
          datasets: handleData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [labels]);

  const renderTotalPointData: any = useCallback(() => {
    const data: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[] = dataRes.map((el: any, ind: number) => {
      let point: number = 0;

      const numRand_1: number = faker.datatype.number({
        min: 0,
        max: 255,
      });
      const numRand_2: number = faker.datatype.number({
        min: 0,
        max: 255,
      });
      const numRand_3: number = faker.datatype.number({
        min: 0,
        max: 255,
      });
      return {
        label: el.driverName,
        data: el.data.map(
          (roundData: { round: string; point: string }, ind: number) => {
            point += Number(roundData.point);
            return point;
          }
        ),
        borderColor: `rgb(${numRand_1}, ${numRand_2}, ${numRand_3})`,
        backgroundColor: `rgba(${numRand_1}, ${numRand_2}, ${numRand_3}, 0.5)`,
        hidden: ind < 10 && true,
      };
    });
    return {
      labels: labels,
      datasets: data,
    };
  }, [dataRes, labels]);

  const renderPointPerRoundData: any = useCallback(() => {
    const data: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[] = dataRes.map((el: any, ind: number) => {
      const numRand_1: number = faker.datatype.number({
        min: 0,
        max: 255,
      });
      const numRand_2: number = faker.datatype.number({
        min: 0,
        max: 255,
      });
      const numRand_3: number = faker.datatype.number({
        min: 0,
        max: 255,
      });
      return {
        label: el.driverName,
        data: el.data.map(
          (roundData: { round: string; point: string }, ind: number) => {
            return Number(roundData.point);
          }
        ),
        borderColor: `rgb(${numRand_1}, ${numRand_2}, ${numRand_3})`,
        backgroundColor: `rgba(${numRand_1}, ${numRand_2}, ${numRand_3}, 0.5)`,
        hidden: ind < 10 && true,
      };
    });
    return {
      labels: labels,
      datasets: data,
    };
  }, [dataRes, labels]);

  return (
    <div>
      <Typography
        fontFamily="fontRegular"
        textAlign="center"
        mb={3}
        fontSize="1.5rem"
        fontWeight={600}
      >
        Chart point result
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Switch
          onChange={(e) => {
            const state: boolean = e.target.checked;
            setSwitchState(state);

            setDataTable(
              state
                ? renderTotalPointData(dataRes)
                : renderPointPerRoundData(dataRes)
            );
          }}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#e10600",
              "&:hover": {
                backgroundColor: "rgba(225, 6, 0, 0.2)",
              },
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "rgba(225, 6, 0, 0.5)",
            },
          }}
          defaultChecked
        />
        <Typography fontFamily="fontRegular">
          {switchState ? "Total Point" : "Point/Round"}
        </Typography>
      </Box>
      {dataTable && (
        <Line style={{ width: "1488px" }} options={options} data={dataTable} />
      )}
    </div>
  );
}
