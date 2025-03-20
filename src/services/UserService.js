import fetch from "auth/FetchInterceptor";
import { API_BASE_URL } from "configs/AppConfig";

const userService = {};

userService.getUsers = function () {
  return fetch({
    url: `${API_BASE_URL}/users`,
    method: "get",
  });
};

userService.getUserById = function (id) {
  return fetch({
    url: `${API_BASE_URL}/users/${id}`,
    method: "get",
  });
};

userService.updateUserById = function (id, payload) {
  return fetch({
    url: `${API_BASE_URL}/users/${id}`,
    method: "put",
    data: payload,
  });
};

export default userService;
