import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Minghao"
            timeAgo="Today at 6:00PM"
            postcontent="Happy Thanksgiving!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Ben"
            timeAgo="Today at 3:00PM"
            postcontent="Happy Black Friday!"
          />
       </ApprovalCard>
       <ApprovalCard>
          <CommentDetail
            author="Jack"
            timeAgo="Today at 4:00PM"
            postcontent="Nice city in Settle!"
          />
      </ApprovalCard>
      </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
