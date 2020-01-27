const API_KEY = process.env.REACT_APP_API_KEY

export const baseUrl: string = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

export const queryParams: string = '&limit=25&offset=0&rating=G&lang=en';

