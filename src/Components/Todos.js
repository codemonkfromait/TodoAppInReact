import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

export default function Todos({ todos, markComplete }) {
  return (
    <ListGroup className="mt-5 mb-3 items">
      {todos.map((todo) => {
        return (
          <ListGroupItem
            key={todo.id}
            style={{
              fontSize: "18px",
            }}
          >
            {todo.todoString}
            <span className="float-right" onClick={() => markComplete(todo.id)}>
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
