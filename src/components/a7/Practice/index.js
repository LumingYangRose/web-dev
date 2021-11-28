import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/todos/TodoItem";
import TodoList from "./Todo/todos/TodoList";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <ReduxExamples/>

            <Link to="/a7/twitter/home">Build</Link>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>

            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>

)
};

export default Practice;