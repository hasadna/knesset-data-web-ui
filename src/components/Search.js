import React, {Component} from 'react';
import {connect} from 'react-redux';
//import searchImg from '../../assets/images/search.png';

class Search extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onSubmit(id, e) {
  //   e.preventDefault();
  //   const selected = this.props.options.find(option => option.id === id);
  //   this.props.selected(selected);
  //   this.props.active(this.props.current);
  // }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchItem(this.myRef.value);
    console.log('value', this.myRef.value);
    this.myRef.value = '';
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <input ref={ref => this.myRef = ref}/>
        <button>
          <img src={'assets/images/search.png'} alt={'Search'} width="16px" height="16px"/>
        </button>
      </form>
      </div>
    )
  }
}

export default Search;