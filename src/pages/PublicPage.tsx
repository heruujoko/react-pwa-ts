import React, { useEffect } from 'react';
import todoService from '../services/todo.service';

const PublicPage = () => {

    const getData = () => {
        todoService.getTodo(2);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h3>This is a public page</h3>
        </div>
    )
}

export default PublicPage;
