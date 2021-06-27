// Action types
export const FETCH_COURSE_REQUEST = "@course/featchCourseRequest";
export const FETCH_COURSE_SUCCESS = "@course/featchCourseSuccess";
export const FETCH_COURSE_FAILURE = "@course/featchCoursefailure";

// Action creators

export const featchCourseRequest = () => {
  return {
    type: FETCH_COURSE_REQUEST,
  };
};

export const featchCourseSuccess = (course) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    payload: course,
  };
};

export const featchCourseFailure = (error) => {
  return {
    type: FETCH_COURSE_FAILURE,
    payload: error,
  };
};
