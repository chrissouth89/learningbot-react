import React from 'react';

import './LearningOptions.css';

const LearningOptions = (props) => {
    const options = [
        {
            text: "Javascript",
            handler: props.actionProvider.handleJavascriptList,
            id: 1,
        },
        {
            text: "Python",
            handler: props.actionProvider.handlePythonList,
            id: 2,
        },
        {
            text: "Game Development",
            handler: props.actionProvider.handleGameDevList,
            id: 3,
        },
        {
            text: "Ruby on Rails",
            handler: props.actionProvider.handleRubyList,
            id: 4,
        },
        {
            text: "Interview Prep",
            handler: props.actionProvider.handleInterviewPrepList,
            id: 5,
        },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
        {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>
}

export default LearningOptions;