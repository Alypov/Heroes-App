import React from 'react';
import axios from 'axios';
import { heroSchema } from '../../Validations/HeroValidation';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeRealName = this.onChangeRealName.bind(this);
    this.onChangeOriginDescription = this.onChangeOriginDescription.bind(this);
    this.onChangeSuperpowers = this.onChangeSuperpowers.bind(this);
    this.onChangeCatchPhrase = this.onChangeCatchPhrase.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);

    this.state = {
      nickname: '',
      real_name: '',
      origin_description: '',
      superpowers: '',
      catch_phrase: '',
      heroes: [],
    };
  }

  onChangeNickname(e) {
    this.setState({
      nickname: e.target.value,
    });
  }

  onChangeRealName(e) {
    this.setState({
      real_name: e.target.value,
    });
  }

  onChangeOriginDescription(e) {
    this.setState({
      origin_description: e.target.value,
    });
  }

  onChangeSuperpowers(e) {
    this.setState({
      superpowers: e.target.value,
    });
  }

  onChangeCatchPhrase(e) {
    this.setState({ catch_phrase: e.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const formData = {
      nickname: this.state.nickname,
      real_name: this.state.real_name,
      origin_description: this.state.origin_description,
      superpowers: this.state.superpowers,
      catch_phrase: this.state.catch_phrase,
    };

    axios
      .post('http://localhost:3000/heroes/add', formData)
      .then((res) => console.log(res.data));

    window.location = '/';

    this.setState({
      nickname: '',
      real_name: '',
      origin_description: '',
      superpowers: '',
      catch_phrase: '',
    });
  }

  render() {
    return (
      <div>
        <div></div>
        <h1>CREATE YOUR HERO</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input
              className="form-control"
              onChange={this.onChangeNickname}
              type="text"
              placeholder="Nickname"
              value={this.state.nickname}
            />
            <input
              className="form-control"
              onChange={this.onChangeRealName}
              type="text"
              placeholder="Real name"
              value={this.state.real_name}
            />
            <input
              className="form-control"
              onChange={this.onChangeOriginDescription}
              type="text"
              placeholder="Origin"
              value={this.state.origin_description}
            />

            <input
              className="form-control"
              onChange={this.onChangeSuperpowers}
              type="text"
              placeholder="Superpowers"
              value={this.state.superpowers}
            />
            <input
              className="form-control"
              onChange={this.onChangeCatchPhrase}
              type="text"
              placeholder="Catch phrase"
              value={this.state.catch_phrase}
            />

            <input
              className="btn btn-primary"
              type="submit"
              value="CREATE A HERO"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
