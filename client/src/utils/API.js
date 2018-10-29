import axios from "axios";

export default {
    sendComment: comment => {
        return axios.post("/api/comments", comment);
    }
};