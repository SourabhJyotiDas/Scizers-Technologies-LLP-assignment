import axios from "axios";

// Register
export const register = (name, mobileNo) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_USER_REQUEST",
    })

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/register`, { name, mobileNo }, config);

    dispatch({
      type: "REGISTER_USER_SUCCESS",
      payload: data.user
    })

  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAIL",
      payload: error.response.data.message,
    })
  }
};


export const getAllUsers = (name = "",) => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_USERS_REQUEST",
    });

    const { data } = await axios.get(`/api/v1/users?name=${name}`);

    dispatch({
      type: "ALL_USERS_SUCCESS",
      payload: data.users,
    });

  } catch (error) {
    dispatch({
      type: "ALL_USERS_FAIL",
      payload: error.response.data.message,
    });
  }
};


export const updateProfile = (name, mobileNo, id) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_UPDATE_REQUEST",
    });

    const { data } = await axios.put(`/api/v1/user/${id}`, { name, mobileNo },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "USER_UPDATE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "USER_UPDATE_FAIL",
      payload: error.response.data.message,
    });
  }
};


export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_USER_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/user/${id}`);

    dispatch({
      type: "DELETE_USER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};


export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_DETAILS_REQUEST",
    });

    const { data } = await axios.get(`/api/v1/user/${id}`);

    dispatch({
      type: "USER_DETAILS_SUCCESS",
      payload: data.user
    });
  } catch (error) {
    dispatch({
      type: "USER_DETAILS_FAIL",
      payload: error.response.data.message,
    });
  }
};


// clearing all Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS"
  })
}

export const clearMessage = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_MESSAGE"
  })
}

