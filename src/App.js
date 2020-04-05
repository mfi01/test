import React, { useState } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import './panels/Persik.css'
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import coin from './img/image.png'
const open = () => {
	window.open('https://mofei.ml')
}
const App = () => {
	return (
	<div className="div">
		
			<img src={coin} alt="" />
			
			<Button onClick={open} size="xl" style={{width: '80vw'}}>
				Включить
			</Button>
	
</div>
	);
}

export default App;

