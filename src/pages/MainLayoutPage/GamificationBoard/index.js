import { Container, makeStyles } from "@material-ui/core";
import LeaderboardFilter from "../../../components/GamificationComponent/LeaderboardFilter";
import StatsCardSection from "../../../components/GamificationComponent/StatsCardSection";
import HeroSection from "../../../components/HeroSection";
import leaderboardElement from "../../../data/leaderboardRowElements.json";
import React from "react"

function GamificationBoard() {
  const classes = useStyles();
  const[leaderBoard,setLeaderBoard]=React.useState(leaderboardElement);
  const heroElements = {
    title: "Gamification Board",
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the.",
  };
  function filter(temp){
   if(temp==="Descending") leaderboardElement.sort((score1,score2)=>{ return score1.score-score2.score})
   else if(temp==="Ascending") leaderboardElement.sort((score1,score2)=>{ return score2.score-score1.score})
   
   setLeaderBoard(leaderboardElement)
    
  }
 
  return (
    <Container className={classes.wrapperContainer} disableGutters>
      <HeroSection
        title={heroElements.title}
        description={heroElements.description}
        banner="assets/img/gamificationBanner.svg"
      />
      <Container className={classes.innerContainer}>
        <StatsCardSection />
        <LeaderboardFilter filter={filter} leaderBoard={leaderBoard}/>
        
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    minWidth: "90%",
  },
  innerContainer: {
    maxWidth: "85%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));

export default GamificationBoard;
