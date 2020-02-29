import React from "react";
import axios from "axios";
import Section from "./Section";

class Accordion extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: null,
			loading: true,
			error: null,
		};
	}

	componentDidMount() {
		/*
		 * Using axios to fetch the data from API
		 */
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then(response => {
				/*
				 * If everything goes all good, Then setting up the state of the application.
				 */
				const posts = response.data;

				this.setState({
					posts,
					loading: false,
					error: null,
				});
			})
			.catch(error => {
				/*
				 * If Something goes wrong, Saving the errors in state and re-rendering it.
				 */
				this.setState({
					loading: false,
					error: true,
				});
			});
	}

	/*
	 * Method to render the loading screen
	 */
	renderLoading() {
		return (
			<div className='accordion-container'>
				<h1 className='error'>Carregando...</h1>
			</div>
		);
	}

	/*
	 * Method to render the Error Message
	 */
	renderError() {
		return (
			<div className='accordion-container'>
				<h1>Algo deu errado, tente novamente recarregando a página.</h1>
			</div>
		);
	}

	/*
	 * Method to render the users with checkbox
	 */
	renderPosts() {
		const { posts, error } = this.state;
		/*
		 * Calling the renderError() method, if there is any error
		 */

		if (error) {
			// this.renderError();
			return (
				<div className='accordion-container'>
					<h1>
						Algo deu errado, tente novamente recarregando a página.
					</h1>
				</div>
			);
		}

		return (
			<div className='accordion-container'>
				<h1>Componente Accordion</h1>
				{posts.map(post => (
					<Section post={post} key={post.id} />
				))}
			</div>
		);
	}

	render() {
		/*
		 * Using destructuring to extract the 'error' from state.
		 */

		const { loading } = this.state;
		return <div>{loading ? this.renderLoading() : this.renderPosts()}</div>;
	}
}

export default Accordion;
