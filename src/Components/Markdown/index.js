import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

const Markdown = () => {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value)
        console.log(input)
    };

    return (
        <div className='row'>
            <div className='col-12 col-sm-6'>
                <label htmlFor='name'>Markdown Tab</label>
                <textarea class="form-control" placeholder="Enter text" rows="10" onChange={handleChange}></textarea>
            </div>
            <div className='col-12 col-sm-6'>
                <ReactMarkdown children={input}></ReactMarkdown>

            </div>
        </div>
    );
};

export default Markdown;
