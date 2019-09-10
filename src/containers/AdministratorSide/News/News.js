import React, {Component} from 'react';

import './news.scss';
import NewsList from "./NewsList";


class News extends Component {
    state = {};

    render() {
        return (
            <div className='news-page'>
                <div className='create-news-block section'>
                    <span>Новини</span>
                    <button className='btn'>Додати</button>
                </div>

                <NewsList />
            </div>
        )
    }
}

export default News;