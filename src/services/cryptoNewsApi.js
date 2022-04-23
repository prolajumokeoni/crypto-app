import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
	'X-RapidAPI-Key': 'df2aaf209emsh0dfe7343de03942p15934djsn5f7b57570c07'
}

const baseUrl =  'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptosNews: builder.query({
			query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		})
	})
});
export const { useGetCryptosNewsQuery } = cryptoNewsApi;
