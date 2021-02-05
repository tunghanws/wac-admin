import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import HappeningList from './components/happenings/HappeningList'
import dataProvider from './ra-data-sample-rest/index'
import { Login, Layout } from './components/layout';
import  * as Dashboard  from './components/dashboard/Dashboard';

import happenings from './components/happenings'

function App() {
	const apiUrl = 'http://localhost:3000';
	return (
		<Admin dataProvider={dataProvider(apiUrl)}>
			<Resource name='happenings' {...happenings}/>
		</Admin>
	)
}

export default App
