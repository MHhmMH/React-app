import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/SearchBar';
import unsplash from './api/unsplash';
import ImageList from './Components/ImageList';
class App extends React.Component {
  state = {images : []}
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params: {
        query: term
      },
    });
    this.setState({images : response.data.results});
  }
  render () {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList image={this.state.images}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
