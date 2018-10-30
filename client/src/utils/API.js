import axios from "axios";

export default {
    sendComment: comment => {
        // console.log("Hey it hit in the API");
        return axios.post("/api/comments", comment);
    }
};