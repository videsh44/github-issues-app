import axios from 'axios';

const github = () => {
  return axios.create({
    baseURL: 'https://api.github.com',
  });
};

export default github;
