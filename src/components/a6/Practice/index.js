import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/todos/TodoItem";
import TodoList from "./Todo/todos/TodoList";

const Practice_a6 = () => {
    return(
        <>
            <h1>Practice</h1>


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

export default Practice_a6;