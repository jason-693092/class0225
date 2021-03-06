/*
  应用主组件
 */
// 组件/模块中需要使用的内容，都需要引入
import React from 'react';

// 引入其他组件
import AddComment from './components/add-comment';
import CommentsList from './components/comments-list';

// 没有状态数据，也不需要使用生命周期函数，这时候会考虑定义成工厂函数组件
function App() {
  return (
    <div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <AddComment />
        <CommentsList />
      </div>
    </div>
  );
}

// 暴露出去
export default App;