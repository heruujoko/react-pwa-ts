import React, { useEffect } from 'react';
import { Route } from "react-router-dom";

interface ILayoutProps {
    path: string,
    exact: boolean,
}

const ProtectedLayout: React.FC<ILayoutProps> = (props) => {
    const checkForSession = (): void => {
        // TODO implement session check
    };

    // check for session on load
    useEffect(() => {
        checkForSession();
    }, []);

    return (
        <Route path={props.path} exact={props.exact}>
            {props.children}
        </Route>
    )
}

export default ProtectedLayout;
