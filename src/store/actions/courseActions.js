// Action types
export const FETCH_COURSE_DATA = "@course/fetchCourseData";
export const FETCH_COURSEDETAILS_DATA = "@course/fetchCourseDetailsDataData";
export const FETCH_COURSE_FAILURE = "@course/fetchCourseFailure";

// Action creators

export const fetchCourseDetailsData = (courseDetails) => {
  return {
    type: FETCH_COURSEDETAILS_DATA,
    payload: courseDetails,
  };
};

export const fetchCourseData = (course) => {
  return {
    type: FETCH_COURSE_DATA,
    payload: course,
  };
};

export const fetchCourseFailure = (error) => {
  return {
    type: FETCH_COURSE_FAILURE,
    payload: error,
  };
};
