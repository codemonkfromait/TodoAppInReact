import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroup,
  Button,
  Container,
} from "reactstrap";
import { v4 } from "uuid";
export default function TodoForm({ addTodos }) {
  const [todoString, setTodoString] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Enter a valid todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };
  return (
    <Form className="form">
      <FormGroup className="form-group">
        <InputGroup>
          <Input
            type="text"
            id="todo"
            name="todo"
            placeholder="Enter your next Todo:"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
            style={{
              fontSize: "18px",
            }}
          />
          <InputGroupAddon addonType="prepend">
            <Button Color="primary" onClick={onSubmit}>
              Add Todo
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
