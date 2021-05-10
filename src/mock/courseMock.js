// import moment from "moment";
import mock from "src/utils/mock";
// import course from "./course";

mock.onGet("/api/courses/:courseid").reply(200, {});
