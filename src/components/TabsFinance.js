import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TableFinance from "./InsuranceDetails";
import { useState } from "react";

export default function DisabledTabs({ financeList }) {
  const [value, setValue] = useState("ביטוח בריאות");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} centered>
          {financeList.data.result.map((insurance) => {
            return (
              <Tab
                label={insurance.type}
                value={insurance.type}
                key={insurance.type}
              />
            );
          })}
        </TabList>
      </Box>
      {financeList.data.result.map((insurance) => {
        return (
          <TabPanel value={insurance.type} key={insurance.type}>
            <TableFinance insuranceDetails={insurance.arr} />
          </TabPanel>
        );
      })}
    </TabContext>
  );
}
