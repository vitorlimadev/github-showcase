import React, { Component } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
//CSS
import { Form, SubmitButton, List } from './styles';
//API
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // Load data from Localstorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }

    if (!repositories) {
      this.setState({ repositories: [{ name: 'facebook/react ' }] });
    }
  }

  // Save data from Localstorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  //----------------------------------------------------

  render() {
    const { newRepo, loading, repositories } = this.state;

    return (
      <Container>
        <h1>
          <FaGithub />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(rep => (
            <li key={rep.name}>
              <span>{rep.name}</span>
              <Link
                to={`/repository/${encodeURIComponent(rep.name)}`}
                className="links"
              >
                Details
              </Link>
              <Link>Delete</Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
