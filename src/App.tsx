import { useEffect, useState } from 'react';
import './App.css';
import githubApi from './types';
import Project from './Project';

//Coisa do Code Spell Checker esse comentário de baixo
//cSpell:ignore Caua

type apiCall = githubApi | undefined;
function App() {
	//Variável para testar o css adicionando um monte de elementos na tela
	const debug = false;
	const apiUrl = 'https://api.github.com/users/cauarojas/repos';

	const [apiData, setApiData] = useState(undefined as apiCall);
	useEffect(() => {
		//Quando a pagina rodar ela puxa os dados da api do github
		const callApi = async () => {
			const rawData = await fetch(apiUrl);
			const jsonData = await rawData.json();
			setApiData(jsonData as githubApi);
		};
		callApi();
	}, []);
	return (
		<>
			<header>Cauã Alencar Rojas Romero</header>
			<main>
				<h1>Meus Projetos:</h1>
				<ul>
					{debug ? (
						<>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
							<Project
								title='Teste'
								description='Esse é um teste muito bem feito sem nenhum erro'
							/>
						</>
					) : apiData === undefined ? (
						<h2>Loading...</h2>
					) : (
						apiData.map((obj) =>
							obj.name !== 'CauaRojas.github.io' ? (
								<Project
									title={obj.name}
									description={
										obj.description ||
										'Projeto atualmente sem descrição, por favor acesse o link dele para saber mais'
									}
									key={obj.id}
									link={obj.html_url}
								/>
							) : null
						)
					)}
				</ul>
			</main>
			<footer>Contatos:</footer>
		</>
	);
}

export default App;
