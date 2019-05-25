import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
      film: '',
      poster: '',
      comment: '',
      }
      this.onChange = this.onChange.bind(this);
      this.submitForm = this.submitForm.bind(this);

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        alert(res.error);
      } else {
        alert(`Added movie with the ID ${res}!`);
      }
    }).catch(e => {
      console.error(e);
      alert('Error!!');
    });

  }

  onChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
      });
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="favorite film">
        <h1> enter your favorite film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="film">Name of film</label>
              <input
                type="text"
                id="film"
                name="film"
                onChange={this.onChange}
                value={this.state.film}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">film poster URL</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">why do you like this film?</label>
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="submit" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  };
}

export default Form;