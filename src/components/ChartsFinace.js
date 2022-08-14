import { Divider, Grid, Stack, Typography } from "@mui/material";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

function ChartsFinace({ insuranceDetails }) {
  const companyName = insuranceDetails.map(
    (insurance) => insurance.companyName
  );
  const companiesNameUniq = [...new Set(companyName)];
  const dataBar = companiesNameUniq.map((companyName) => {
    let count = 0;
    insuranceDetails.forEach((insurance) => {
      if (insurance.companyName === companyName) {
        count = count + 1;
      }
    });
    return {
      companyName: companyName,
      count,
    };
  });

  const dataPai = companiesNameUniq.map((companyName) => {
    let count = 0;
    insuranceDetails.forEach((insurance) => {
      if (insurance.companyName === companyName) {
        count = count + insurance.premuim;
      }
    });
    return {
      x: companyName,
      y: count,
    };
  });

  return (
    <Grid item xs={12} md={3}>
      <Stack>
        <Grid container justifyContent="center">
          <Typography variant="h4">סה״כ פוליסות</Typography>
        </Grid>
        <VictoryChart domainPadding={40}>
          <VictoryBar
            data={dataBar}
            style={{
              data: { fill: "#c43a31" },
            }}
            labels={({ datum }) => datum.count}
            x="companyName"
            y="count"
          />
        </VictoryChart>
        <Divider />
        <Grid
          container
          justifyContent="center"
          style={{ marginTop: 10, fontWeight: "bold" }}
        >
          <Typography variant="h4">גובה הפרמיה</Typography>
        </Grid>
        <VictoryPie
          height={260}
          style={{ labels: { fontSize: 7 } }}
          data={dataPai}
          colorScale={["navy", "#c43a31", "gold", "cyan", "navy"]}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
        />
      </Stack>
    </Grid>
  );
}

export default ChartsFinace;
