import React from 'react';

export default function Message({ message }) {
    return (
        <div className="p-6 bg-white border-b border-gray-200"><strong>{ message.name }</strong>: { message.subject }<br />{ message.message }</div>
    );
}
