import { useState } from 'react';
import './App.css';
import Project from './Project';

function App() {
	return (
		<>
			<header>Cauã Alencar Rojas Romero</header>
			<main>
				<h1>Meus Projetos:</h1>
				<ul>
					<Project
						title='Teste'
						description='Esse é um teste muito bem feito sem nenhum erro'
					/>
				</ul>
			</main>
			<footer>Contatos:</footer>
		</>
	);
}

export default App;
