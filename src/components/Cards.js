import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({item}) => {
    return (
        <div className="col-md-3 opca mb-2 mt-2">
            <div className="card bg-dark text-center news-item">
                <img className="card-img-top" alt="" src={item.image} />
                <div className="card-body">
                    <h3 className="card-title">{item.short_title}</h3>
                    <p className="card-text">{item.shor_content}</p>
                </div>
                <Link className="m-4 btn btn-game" to={`/items/${item.id}`}>
                    Detail
                </Link>
            </div>
        </div>
    );
};

export default Cards;