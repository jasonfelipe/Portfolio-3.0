import axios from "axios";

export default {
    sendComment: post => {
        console.log("Hey it hit in the API.js");
        return axios.post("/api/comments", post);
    }
};