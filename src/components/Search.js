import React, {Component} from 'react';

class Search extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }


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
        <input className={"inputSearch"}  placeholder={"חפש מה שבא לך"} ref={ref => this.myRef = ref}/>
        <button >
          <img src={'assets/images/search.png'} alt={'Search'} width="16px" height="16px"/>
        </button>
      </form>
      </div>
    )
  }
}

export default Search;