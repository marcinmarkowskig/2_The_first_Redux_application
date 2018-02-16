import React, { Component } from 'react';
import { connect } from 'react-redux';//zapewnienie połączenia między zupełnie oddzielnymi reactem, a reduxem
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    //1b
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as mapStateToProps
  //inside of BookList
  return {
    //1a
    books: state.books //this is the connection between redux and our component-container.
  };
}

//Anything returned from this function will end up as props on the BookList container
//dzieki temu możemy pisac props.selectBook ( selectBook to po dwukropku)
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers,
  //wszystkie utworzone akcje będą rosyłane do wszystkich reducerów
    return bindActionCreators ({ selectBook: selectBook }, dispatch);
}

//connect zapewnia utworzenie containera
//Promote BookList from a component to a container - it needs to know about this dispatch method, selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);//pobranie funkcji i komponentu
