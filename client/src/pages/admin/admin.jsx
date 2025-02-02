import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';

import Home from '../home/home';
import Category from '../category/category';
import Product from '../product/product';
import Role from '../role/role';
import User from '../user/user';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
import NotFound from '../not-found/not-found';

import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;

class Admin extends Component {
	render() {
		const user = this.props.user;
		if (!user._id) {
			return <Redirect to="/login" />;
		}
		return (
			<Fragment>
				<Layout style={{ minHeight: '100%' }}>
					<Sider>
						<LeftNav></LeftNav>
					</Sider>
					<Layout>
						<Header>
							<p>Hello, {user.username}</p>
						</Header>
						<Content style={{ margin: '20px', backgroundColor: '#fff' }}>
							<Switch>
								<Redirect exact from="/" to="/home" />
								<Route path="/home" component={Home} />
								<Route path="/category" component={Category} />
								<Route path="/product" component={Product} />
								<Route path="/role" component={Role} />
								<Route path="/user" component={User} />
								<Route path="/charts/bar" component={Bar} />
								<Route path="/charts/line" component={Line} />
								<Route path="/charts/pie" component={Pie} />
								<Route component={NotFound} /> {}
							</Switch>
						</Content>
						<Footer style={{ textAlign: 'center', color: '#aaa' }}>
							Helen Gu @ 2020
						</Footer>
					</Layout>
				</Layout>
			</Fragment>
		);
	}
}

export default connect((state) => ({ user: state.user }), {})(Admin);
