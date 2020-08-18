import axios from 'axios';
import { message } from 'antd';

const ajax = (url, data = {}, method = 'GET') => {
	return new Promise(function (resolve, reject) {
		let promise;
		// 执行异步ajax请求
		if (method === 'GET') {
			promise = axios.get(url, {
				params: data,
			});
		} else {
			promise = axios.post(url, data);
		}

		promise
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				message.error('请求错误：' + error.message);
			});
	});
};

export default ajax;