import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import ResultTable from "../components/ResultTable/ResultTable";
import ResultChart from "../components/ResultChart/ResultChart";

export default function RacesResult() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box component={"div"} sx={{ width: "100%" }}>
        <Box
          component={"div"}
          sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              sx: { backgroundColor: "#e10600" },
            }}
            sx={{
              "& button.Mui-selected": { color: "#e10600" },
            }}
          >
            <Tab
              label="Table Data"
              sx={{
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#25252d",
                  borderBottom: "2px solid #e10600",
                },
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                fontFamily: "fontRegular",
                transition: "background 0.5s",
              }}
            />
            <Tab
              label="Chart"
              sx={{
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#25252d",
                  borderBottom: "2px solid #e10600",
                },
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                fontFamily: "fontRegular",
                transition: "background 0.5s",
              }}
            />
            {/* <Tab
              label="Item Three"
              sx={{
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#25252d",
                  borderBottom: "2px solid #e10600",
                },
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                fontFamily: "fontRegular",
                transition: "background 0.5s",
              }}
            /> */}
          </Tabs>
        </Box>
        {value === 0 && <ResultTable />}
        {value === 1 && <ResultChart />}
        {/* {value === 2 && <Box component={"div"}>Item Three</Box>} */}
      </Box>
    </div>
  );
}


// [1,2,4,3,4,5,5,6,6,6,6].filter(el=>el ===6).length