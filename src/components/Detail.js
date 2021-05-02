import React from 'react';
// import '../components/css/Detail.css'
// import { useParams } from 'react-router-dom';

const Detail = ({news}) => {
    
    // const { itemId } = useParams()

    return (
        <div>
            {news.map((news) => (
                <div className="container bg mt-2 mb-2">
                    <h1 className="text-center title-style">{news.title}</h1>
                    <img src={news.image} className="p-4 mt-2 mb-2" alt="" />
                    <p className="mb-4 mr-4 ml-4 size-p">{news.content}</p>
                </div>
            ))}
        </div>

    );
};

{/*{news.filter((news) => itemId === news.id)}*/}

export default Detail;