import { Box, List } from "@material-ui/core";
import React from "react";
import CourseDoubtQuestionList from "./SubComponents/CourseDoubtQuestionList";

function QuestionAndAnswer({ courseDoubt }) {
  return (
    <Box>
      <List>
        {courseDoubt.map((item, index) => (
          <CourseDoubtQuestionList key={index} props={item} />
        ))}
      </List>
    </Box>
  );
}

export default QuestionAndAnswer;
