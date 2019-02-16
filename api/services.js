import moment from 'moment';

const API_URL = 'https://newsapi.org';
const API_KEY = 'd6da863f882e4a1a89c5152bd3692fb6';

export const getTopNews = (country = 'us') => {
  return fetch(
    `${API_URL}/v2/top-headlines?country=${country}&apiKey=${API_KEY}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  );
};

export const searchNews = options => {
  const fromDate = options.fromDate || moment(new Date()).format('YYYY-MM-DD');
  const toDate = options.endDate || moment(new Date()).format('YYYY-MM-DD');
  const sort = options.sort || "Relevancy";
  return fetch(
    `${API_URL}/v2/everything?q=${options.keyword}&from=${fromDate}&to=${toDate}&sortBy=${sort}&apiKey=${API_KEY}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  );
};

export const getUSPublishers = () => {
  return fetch(
    `${API_URL}/v2/sources?country=us&apiKey=${API_KEY}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  );
};
