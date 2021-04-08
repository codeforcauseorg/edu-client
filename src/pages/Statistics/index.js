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
import ScrollTop from "../../components/backTop/index";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "5px",
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: "10px",
  },
  appBar: {
    background: "#160050",
  },
  titlecontainer: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  buttoncontainer: {
    marginTop: theme.spacing(1),
  },
  Icon: {
    height: 30,
    width: 30,
  },

  backtotop: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const data = [
  {
    name: "Contest A",
    2020: 400,
    2021: 240,
    rank: 240,
  },

  {
    name: "Contest B",
    2020: 189,
    2021: 480,
    rank: 218,
  },
  {
    name: "Contest C",
    2020: 239,
    2021: 380,
    rank: 250,
  },
  {
    name: "Contest D",
    2020: 349,
    2021: 230,
    rank: 210,
  },
];

const data2 = [
  { name: "Contest A", value: 400 },
  { name: "Contest B", value: 300 },
  { name: "Contest C", value: 300 },
  { name: "Contest D", value: 200 },
];
const data3 = [
  {
    name: "Cont A",
    percentage: 590,
    score: 800,
    rank: 900,
  },
  {
    name: "Cont B",
    percentage: 868,
    score: 967,
    rank: 1206,
  },
  {
    name: "Cont C",
    percentage: 1097,
    score: 1098,
    rank: 989,
  },
  {
    name: "Cont D",
    percentage: 1180,
    score: 1200,
    rank: 1228,
  },
  {
    name: "Cont E",
    percentage: 1220,
    score: 1108,
    rank: 1100,
  },
];
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
      <ScrollTop />
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
        <Box className={classes.titlecontainer}>
          <Typography variant="h1">
            Statistics &nbsp;
            <span>
              <img src="assets/icon/stats.png" className={classes.Icon} />
            </span>
          </Typography>
        </Box>
        <LineChart
          width={350}
          height={250}
          data={data}
          margin={{
            top: 15,

            bottom: 15,
          }}
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

        <PieChart width={300} height={300}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <ComposedChart
          layout="vertical"
          width={300}
          height={450}
          data={data3}
          margin={{
            top: 20,
            bottom: 20,
          }}
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
      </Container>
      <div className={classes.backtotop}>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    </>
  );
}

export default Statistics;
