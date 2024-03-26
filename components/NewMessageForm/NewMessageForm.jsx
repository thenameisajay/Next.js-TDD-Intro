import React, { useState } from 'react';


export default function NewMessageForm({ onSend }) {
    const [inputText, setInputText] = useState('');

    function handleTextChange(event) {
        setInputText(event.target.value);
    }

    function handleSend() {

        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
            <form>
                <label>
                    Message:
                    <input
                        className='m-1 rounded-sm border border-gray-300'
                        type="text"
                        data-testid="messageText"
                        value={inputText}
                        onChange={handleTextChange}
                    />
                </label>
                <button
                    className='m-1 bg-blue-500 hover:bg-blue-700 text-white  text-sm font-bold py-1 px-4 rounded-full'
                    type="submit"
                    onClick={
                        (event) => {
                            event.preventDefault();
                            handleSend();
                        }
                    }
                    data-testid="sendButton"
                >Send</button>
            </form>
        </div >
    );





}



