import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
//import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';


const Home = ({ id, go, fetchedUser, request}) => (
	<Panel id={id}>
		<PanelHeader>Test</PanelHeader>

		<Group title="Navigation Example">
			<Div style={{display: 'flex'}}>
				<Button size="l" level="2" style={{ marginRight: 8 }} stretched onClick={request} data-num="1">
					Открыть телеграм
				</Button>
				<Button size="l" level="2" stretched onClick={request} data-num="2">
                                        Открыть вк
                                </Button>
			</Div>
			<Div style={{display: 'flex'}}>
				<Button size="l" level="2" style={{ marginRight: 8 }} stretched onClick={request} data-num="3">
                                        Открыть ютуб
                                </Button>
                                <Button size="l" level="2" stretched onClick={request} data-num="4">
                                        Открыть стим
                                </Button>
				
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
