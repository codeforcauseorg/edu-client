// import moment from "moment";
import mock from "../utils/mock";
// import course from "./course";

mock.onGet("/api/courses/:courseid").reply(200, {});
