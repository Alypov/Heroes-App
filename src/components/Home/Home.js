import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Hero = (props) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.nickname}</h5>
      <p className="card-text">{props.real_name}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{props.origin_description}</li>
      <li className="list-group-item">{props.superpowers}</li>
      <li className="list-group-item">{props.catch_phrase}</li>
    </ul>

    <div className="card-body">
      <Link className="btn btn-primary " to={`/edit/${props.id}`}>
        Edit
      </Link>

      <a
        className="btn btn-danger"
        href="#"
        onClick={() => props.deleteHero(props.id)}
      >
        DELETE HERO
      </a>
    </div>
  </div>
);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.deleteHero = this.deleteHero.bind(this);

    this.state = { heroes: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/heroes/')
      .then((response) => {
        this.setState({ heroes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteHero(id) {
    axios
      .delete(`http://localhost:3000/heroes/${id}`)
      .then((res) => console.log(res.data));

    this.setState({
      heroes: this.state.heroes.filter((el) => el._id !== id),
    });
  }
  heroesList() {
    return this.state.heroes.map((currentHero) => {
      return (
        <Hero
          nickname={currentHero.nickname}
          real_name={currentHero.real_name}
          origin_description={currentHero.origin_description}
          superpowers={currentHero.superpowers}
          catch_phrase={currentHero.catch_phrase}
          id={currentHero._id}
          deleteHero={this.deleteHero}
          key={currentHero._id}
        ></Hero>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>HEROES LIST</h1>

        <div>
          {this.heroesList().length ? (
            this.heroesList()
          ) : (
            <div> There is no heroes yet...</div>
          )}
        </div>
        <Link className="btn btn-success" to="/create_new_hero">
          Create a new hero
        </Link>
      </div>
    );
  }
}

export default Home;
