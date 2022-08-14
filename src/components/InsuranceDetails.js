import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { camelCaseToTitleCase } from "../utils/string";
import ChartsFinace from "./ChartsFinace";

function InsuranceDetails({ insuranceDetails }) {
  const insuranceKey = Object.keys(insuranceDetails[0]);

  const columns = insuranceKey.map((insurance) => {
    return {
      field: insurance,
      headerName: camelCaseToTitleCase(insurance),
      sortable: false,
      flex: 1,
    };
  });

  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <Grid container justifyContent="space-around">
        <Grid item xs={12} md={8} sx={{ height: 520 }}>
          <DataGrid
            getRowId={(row) => row.policyNumber}
            rows={insuranceDetails}
            columns={columns}
            rowHeight={120}
          />
        </Grid>
        <ChartsFinace insuranceDetails={insuranceDetails} />
      </Grid>
    </Box>
  );
}

export default InsuranceDetails;
