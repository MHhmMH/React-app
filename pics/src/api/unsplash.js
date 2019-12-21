import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:'Client-ID 0885b5e243eb9bc0388d8d1b7e3052f565941c424ac8b881f66561a0dbf4bb4a'
  }
});
