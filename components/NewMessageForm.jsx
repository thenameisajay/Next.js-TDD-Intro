import React from 'react';


export default function NewMessageForm() {
    return (
        <div>
            <form>
                <label>
                    Message:
                    <input
                        className='m-1 rounded-sm border border-gray-300'
                        type="text"
                        data-testid="messageText"
                    />
                </label>
                <button
                    className='m-1 bg-blue-500 hover:bg-blue-700 text-white  text-sm font-bold py-1 px-4 rounded-full'
                    type="submit"
                    data-testid="sendButton"
                >Send</button>
            </form>
        </div>
    );
}