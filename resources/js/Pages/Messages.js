import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Message from '@/Components/Message';

export default function Messages(props) {
    const renderMessages = () => {
        return props.messages.map((message, i) => {
            return <Message key={i} message={message} />
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Messages</h2>}
        >
            <Head title="Messages" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        { renderMessages() }
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
