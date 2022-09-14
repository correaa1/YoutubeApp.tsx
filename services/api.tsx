import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: { 
     part: 'snippet',
     maxResults: 5,
     key: 'AIzaSyD7XZQf-k9SuLkH2tLFHbJgt_y8nD6wLHI'
  }
  
});
