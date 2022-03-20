type githubApi = Array<repo>;
interface repo {
	id: string;
	name: string;
	full_name: string;
	html_url: string;
}
export default githubApi;
