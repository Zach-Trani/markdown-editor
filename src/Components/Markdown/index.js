import React, { useState } from 'react';

const Markdown = () => {
    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value)
        console.log(input)
    };

    return (
        <div>
            <div>
                <label htmlFor='name'>Markdown Tab</label>
                <input type='text' id='name' name='name' onChange={handleChange}
                    required
                    size='10'></input>
            </div>
            <div>
                {input}
            </div>
        </div>
    );
};

export default Markdown;
