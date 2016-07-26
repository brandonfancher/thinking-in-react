import React, { Component } from 'react';
import './styles/Filter.css';

class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div className="Filter">
        <a
          href="#"
          className={filter === 'open' ? "Filter-active" : "Filter-inactive"}
          onClick={() => setFilter('open')}
        >
          Open Tasks
        </a>

        {' | '}

        <a
          href="#"
          className={filter === 'complete' ? "Filter-active" : "Filter-inactive"}
          onClick={() => setFilter('complete')}
        >
          Complete Tasks
        </a>

        {' | '}

        <a
          href="#"
          className={filter === 'all' ? "Filter-active" : "Filter-inactive"}
          onClick={() => setFilter('all')}
        >
          All Tasks
        </a>
      </div>
    );
  }
}

export default Filter;
