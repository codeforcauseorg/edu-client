import { GET_DOUBT_ENDPOINT } from "../constants/apiEndpoints";
import errorHandler from "./errorHandler";
import axios from "../utils/axios";
import { doubtLoading } from "../store/actions/doubtActions";

export const postDoubt = (courseID, tags, userID, question, doubtBody, userName) => {
  return (dispatch) => {
    try {
      dispatch(doubtLoading(true));
      const postDoubt = {
        tags: tags,
        asked_by: userID,
        question: question,
        request_mentor: false,
        doubtBody: doubtBody,
        askedBy_name: userName,
      };
      axios.post(GET_DOUBT_ENDPOINT + `/new/${courseID}`, postDoubt).then((res) => {
        const result = res.data;
        console.log(result);
        dispatch(doubtLoading(false));
      });
    } catch (error) {
      dispatch(doubtLoading(false));
      errorHandler(error, dispatch);
    }
  };
};

export const postDoubtAnswer = (doubtID, userID, answerBody) => {
  return (dispatch) => {
    try {
      dispatch(doubtLoading(true));
      const postDoubtAnswer = {
        answered_by: userID,
        answer: answerBody,
      };
      axios.post(GET_DOUBT_ENDPOINT + `/newAnswer/${doubtID}`, postDoubtAnswer).then((res) => {
        const result = res.data;
        console.log(result);
        dispatch(doubtLoading(false));
      });
    } catch (error) {
      dispatch(doubtLoading(false));
      errorHandler(error, dispatch);
    }
  };
};
