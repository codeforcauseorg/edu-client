// Action types
export const FETCH_COURSE_SUCCESS = "@course/fetchCourseSuccess";
export const FETCH_COURSE_FAILURE = "@course/fetchCoursefailure";

// Action creators

export const fetchCourseSuccess = (course) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    payload: course,
  };
};

export const fetchCourseFailure = (error) => {
  return {
    type: FETCH_COURSE_FAILURE,
    payload: error,
  };
};
