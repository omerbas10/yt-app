import axios from 'axios';

const KEY = 'AIzaSyCeHmT4MKOsD7JMz4TehQDnMfxo7zX4qPo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});