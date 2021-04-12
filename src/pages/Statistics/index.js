import {
  Box,
  Container,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  AppBar,
} from "@material-ui/core";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  ComposedChart,
  Area,
  Bar,
  Tooltip,
  Legend,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import stats from "../../data/statisticsData.json";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: "15px",
    marginBottom: "15px",
  },
  appBar: {
    background: "#160050",
  },

  buttoncontainer: {
    marginTop: theme.spacing(1),
  },
  Icon: {
    height: 30,
    width: 30,
  },
}));

const linedata = stats[0].linedata;
const piedata = stats[0].piedata;
const composeddata = stats[0].composeddata;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Statistics(props) {
  const classes = useStyle();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Your Past Perfomance Statistics
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <Box className={classes.title}>
          <Typography variant="h1">
            Statistics &nbsp;
            <span>
              <img src="assets/icon/stats.png" className={classes.Icon} />
            </span>
          </Typography>
        </Box>

        <LineChart
          width={300}
          height={200}
          data={linedata}
          margin={{
            top: 15,
            bottom: 15,
          }}
          style={{ fontSize: "12px" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="2021"
            stroke="#160050"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="2020" stroke="#a70202" />
        </LineChart>
        <Typography variant="h3" style={{ marginBottom: "20px", color: "gray" }}>
          Line Chart
        </Typography>

        <PieChart width={250} height={250} style={{ fontSize: "12px" }}>
          <Pie
            data={piedata}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {piedata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <Typography variant="h3" style={{ marginBottom: "20px", color: "gray" }}>
          Pie Chart
        </Typography>
        <ComposedChart
          layout="vertical"
          width={250}
          height={350}
          data={composeddata}
          margin={{
            top: 20,
            bottom: 20,
          }}
          style={{ fontSize: "12px" }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="rank" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="score" barSize={20} fill="#413ea0" />
          <Line dataKey="percentage" stroke="#ff7300" />
        </ComposedChart>
        <Typography variant="h3" style={{ marginBottom: "20px", color: "gray" }}>
          Composed Chart
        </Typography>
      </Container>
    </>
  );
}

export default Statistics;
