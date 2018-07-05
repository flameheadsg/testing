import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return(
      <div>
        <form>
          <h4>Add a Comment</h4>
          <textarea />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
