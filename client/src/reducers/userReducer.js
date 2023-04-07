export const userReducer = (state = { user: {}, users: [] }, action) => {
   switch (action.type) {

      case "REGISTER_USER_REQUEST":
      case "ALL_USERS_REQUEST":
      case "USER_UPDATE_REQUEST":
      case "DELETE_USER_REQUEST":
      case "USER_DETAILS_REQUEST":
         return {
            loading: true,
         };

      case "USER_UPDATE_SUCCESS":
      case "DELETE_USER_SUCCESS":
         return {
            ...state,
            user: action.payload,
            loading: false,
            message: action.payload
         };



      case "REGISTER_USER_SUCCESS":
      case "USER_DETAILS_SUCCESS":
         return {
            ...state,
            loading: false,
            user: action.payload,
         };

      case "ALL_USERS_SUCCESS":
         return {
            ...state,
            loading: false,
            users: action.payload,
         };

      case "REGISTER_USER_FAIL":
      case "ALL_USERS_FAIL":
      case "USER_UPDATE_FAIL":
      case "DELETE_USER_FAIL":
      case "USER_DETAILS_FAIL":
         return {
            ...state,
            loading: false,
            user: null,
            users: null,
            error: action.payload,
         };

      case "CLEAR_ERRORS":
         return {
            ...state,
            error: null,
         };

      case "CLEAR_MESSAGE":
         return {
            ...state,
            error: null,
            message: null,
         };

      default:
         return state;
   }
};