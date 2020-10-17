import '../components-styles/results.scss';
import React from 'react';
import ReactJson from 'react-json-view'

const results = (props) => {
    return (
        <div className="json-div">
            <h3>Header</h3>
            <ReactJson src={props.results.header} />
            <h3>Body</h3>
            <ReactJson src={props.results.body} />
        </div>
    )
};

export default results;