import React, { Component } from 'react';
import './styles/Filter.css';

class Filter extends Component {
  render() {
    const filter = this.props.filter;
    return (
      <div className="Filter">
        <p>
          <span style={filter === 'open' ? { fontWeight: 'bold' } : null}>Open Tasks</span> |
          <span style={filter === 'complete' ? { fontWeight: 'bold' } : null}> Complete Tasks</span> |
          <span style={filter === 'all' ? { fontWeight: 'bold' } : null}> All Tasks</span>
        </p>
      </div>
    );
  }
}

export default Filter;
