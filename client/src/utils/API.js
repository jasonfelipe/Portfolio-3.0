import axios from "axios";

export default {
    create: post => {
        // console.log("Hey it hit in the API.js");
        return axios.post("/api/comments", post);
    }
};