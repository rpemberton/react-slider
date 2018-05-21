import React, { Component } from 'react';
import Slider from './Slider';
import SlideUser from './SlideUser';
import Spinner from './Spinner';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=4')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(res => {
        this.setState(
          ({users, loading}) => ({
            users: res.results,
            loading: false,
          })
        )
      })
      .catch(err => console.error(new Error(err)));
  }

  render() {
    const {loading, users} = this.state;

    const slides = users.map(user => {
      return <SlideUser user={user} numSlides={users.length} key={user.email} />
    });

    return (
      <div className="users">
        <div className="user-slider">
          {
            loading 
              ? <Spinner /> 
              : <Slider slides={slides} />
          }
        </div>
      </div>
    );
  }
}

export default Users;
