import axios from "axios";

export default {
    createMessage: message => {
        // console.log("Hey it hit in the API.js");
        return axios.post("/api/contacts", message);
    },
    getPosts: post => {
        return axios.get('/api/posts', post);
    },

};