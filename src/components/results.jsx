import '../components-styles/results.scss';
import React from 'react';
import JSONPretty from 'react-json-pretty';
const results = (props) => {
    return (
        <div className="json-div">
            <JSONPretty id="json-pretty" data={props.results}></JSONPretty>
        </div>
    )
};

export default results;