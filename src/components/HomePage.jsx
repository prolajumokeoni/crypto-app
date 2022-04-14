import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const HomePage = () => {
	const { data, isFetching } = useGetCryptosQuery();
	console.log(data);
	return (
		<>
			<Title level={2} className="heading">Global Crypto Stats</Title>
			<Row>
				<Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
				<Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
				<Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
				<Col span={12}><Statistic title="Total 24th Volume" value="5" /></Col>
				<Col span={12}><Statistic title="Total Markets" value="5" /></Col>
			</Row>
		</>
	)
}

export default HomePage