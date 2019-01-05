import axios from "axios";

export default {
    createMessage: message => {
        // console.log(message);
        return axios.post("/api/messages", message);
    },
    getPosts: post => {
        return axios.get('/api/posts', post);
    },

};