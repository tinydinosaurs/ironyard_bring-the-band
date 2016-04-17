import React from 'react';

const BandSearch = React.createClass({
  handleSearch: function(e) {
    e.preventDefault();
    // let searchResults = {
    //   bandName: this.refs.name.value,
    // };
    
    // unicornCollection.create(newUnicorn)
  },
  render: function() {
    return (
      <form onSubmit={this.handleSearch}>
        <input type="text" placeholder="search for your favorite band!" />
        <button type="submit" className="search-btn">search!</button>
      </form>
    )
  }
});

export default BandSearch;