import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	'X-RapidAPI-Key': 'df2aaf209emsh0dfe7343de03942p15934djsn5f7b57570c07'
}

const baseUrl  = 'https://coinranking1.p.rapidapi.com'


const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createRequest('/coins')
		})
	})
});
export const {
	useGetCryptosQuery,
} = cryptoApi;