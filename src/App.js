import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			textField: "",
			category: "",
			wishlist: [
				{
					id: 1,
					wish: "Do something!",
					category: "Movie"
				},
				{
					id: 2,
					wish: "Do something again!",
					category: "Song"
				},
				{
					id: 3,
					wish: "Smile at you everyday ✌",
					category: "Goal"
				}
			]
		}
	}

	removeTodo = (id) =>{
		let newlist = this.state.wishlist.filter(listItem => listItem.id !== id);

		this.setState(()=>({ wishlist: newlist }));
	}

	deleteAll = () =>{
		this.setState(()=>({ wishlist: [] }));
	}

	handleChange = (e) =>{
		const { name, value } = e.target;

		this.setState(()=>({ [name]: value }));
	}

	addWish = (e) =>{
		e.preventDefault();

		if(this.state.textField === ''){
			alert("The input field can not be empty!");
			return;
		}

		const newWish = {
			id: 1 + this.state.wishlist.length,
			wish: this.state.textField,
			category: this.state.category
		};

		let listOfWishes = [ newWish, ...this.state.wishlist ];

		this.setState(()=>({ wishlist: listOfWishes, textField: '' }));
	}

	handleCategory = (e) =>{
		const { id } = e.target;
		this.setState(()=>({ category: id }));
	}

	render(){
		return (
			<div className="container">
				<div className="my-5">

					<h3>My Wishlist</h3>

					<div className="new-todo-form">

						<form onSubmit={this.addWish}>

							<div className="form-group">
								<input type="text" className="form-control" name="textField" value={this.state.textField} onChange={this.handleChange} />
							</div>

							<div className="my-3">
								<label>Select Category:</label>

								<div className="d-inline mx-3">
									<label htmlFor="movie">Movie</label>
									&nbsp;
									<input type="radio" onChange={this.handleCategory} id="movie" name="category" />
								</div>

								<div className="d-inline mx-3">
									<label htmlFor="song">Song</label>
									&nbsp;
									<input type="radio" onChange={this.handleCategory} id="song" name="category" />
								</div>

								<div className="d-inline mx-3">
									<label htmlFor="goal">Goal</label>
									&nbsp;
									<input type="radio" onChange={this.handleCategory} id="life_goal" name="category" />
								</div>

								<div className="d-inline mx-3">
									<label htmlFor="misc">Misc.</label>
									&nbsp;
									<input type="radio" onChange={this.handleCategory} id="misc" name="category" />
								</div>



							</div>

							<div className="btn-group">
								<input type="submit" className="btn btn-primary btn-sm" value="Add" />
								<button type="button" className="btn btn-danger btn-sm" onClick={this.deleteAll}>Delete All wishes</button>
							</div>
						</form>

					</div>
					<hr />
				</div>
				<div className="app-body">

					<table className="table table-sm table-hover table-striped table-borderless">

						<thead>
							<tr>
								<th>#</th>
								<th>Your Wishes</th>
								<th>Category</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{this.state.wishlist.length < 1 ? 
								<tr>
									<td></td>
									<td>You can create a new wish using the form 
										<span role="img" aria-label="up">👆</span>
										!
									</td>
									<td></td>
								</tr>
							:
								this.state.wishlist.map((listItem, index) => (
									<tr key={index}>
										<td> {++index} </td>
										<td> {listItem.wish} </td>
										<td> <span className="badge badge-info badge-pill text-capitalize">{listItem.category}</span> </td>
										<td> <button className="btn btn-outline-warning btn-sm" style={{ borderRadius: '2.75rem', width: '40px' }} onClick={()=> this.removeTodo(listItem.id)}>X</button> </td>
									</tr>
								))
							}
						</tbody>
					</table>

				</div>
			</div>
		);
	}
}

export default App;
