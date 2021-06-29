import mock from "../utils/mock";
import popular from "./courses/popular/index";
import upcoming from "./courses/upcoming/index";
import explore from "./courses/explore/index";
import courseDetail from "./courses/courseDetail/index";

mock.onGet("/api/courses/all").reply(200, { popular, upcoming, explore });
mock.onGet("/api/courses/:courseid").reply(200, courseDetail);
