import React from 'react';
import PropTypes from 'prop-types';

import './list-item.scss';

function ListItem({ text, date }) {
    return (
        <div className="list-item">
            <p data-test="todo-item-text">{text}</p>
            <div data-test="todo-item-date"><b>Creation Date:</b> {new Date(date).toLocaleDateString('tr-TR')}</div>
        </div>
    )
}

ListItem.propTypes = {
    text: PropTypes.string,
    date: PropTypes.string
}

export default ListItem

