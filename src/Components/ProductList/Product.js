import React, {Component} from 'react';

export default ({product}) => (
  <div className="item">
    <div className="image">
      <img src={product.productImageUrl} />
      {product.id}
    </div>
    <div className="middle aligned content">
      <div className="header">
        <a>
          <i className="large caret up icon" />
        </a>
        {product.votes}
      </div>
      <div className="description">
        <a href={product.url}>{product.title}</a>
        <p>{product.description}</p>
      </div>
      <div className="extra">
        <span>Submitted by: </span>
        <img className="ui avatar image" src={product.submittedAvatarUrl} />
      </div>
    </div>
  </div>
);
