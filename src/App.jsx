import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';

const initialForm = {
  name: '',
  email: '',
  city: 'HCM',
  password: '',
  confirmPassword: '',
};

function App() {
  const [forms, setForms] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  function submit(e) {
    e.preventDefault();
  
    const { name, email, city, gender, password, confirmPassword } = forms;
  
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!city) newErrors.city = true;
    if (!password) newErrors.password = true;
    if (!confirmPassword) newErrors.confirmPassword = true;
  
    if (password !== confirmPassword) {
      newErrors.confirmPassword = true;
    }
  
    setErrors(newErrors);

   // Console log khi có lỗi
   console.log('Errors:', newErrors);

   if (Object.keys(newErrors).length > 0) return;
  
    const user = {
      id: Date.now(),
      name,
      email,
      city,
      password,
    };
  
    // Thêm người dùng mới vào danh sách users
    setUsers(prevUsers => [user, ...prevUsers]);
  
    // Làm sạch form và các lỗi
    setForms(initialForm);
    setErrors({});
    console.log('User added:', user);

  }
  function handleChange(e) {
    const { name, value } = e.target;

    setForms(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (value.trim() !== '') {
      setErrors(prevState => ({
        ...prevState,
        [name]: false,
      }));
    }
  }

  function deleteUser(id) {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  }

  return (
    <Container fluid>
      <h2>Register Form</h2>
      <Form onSubmit={submit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={forms.name}
            placeholder="Enter Name"
            onChange={handleChange}
            isInvalid={errors.name}
          />
          <Form.Control.Feedback type="invalid">Please enter name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={forms.email}
            placeholder="Enter email"
            onChange={handleChange}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">Please enter email</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Select
            aria-label="Select City"
            name="city"
            value={forms.city}
            onChange={handleChange}
            isInvalid={errors.city}
          >
            <option value="HCM">TP HCM</option>
            <option value="HN">HN</option>
            <option value="HP">HaiPhong</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">Please choose city</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={forms.password}
            placeholder="Enter Password"
            onChange={handleChange}
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">Please enter password</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={forms.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            isInvalid={errors.confirmPassword || (forms.confirmPassword && forms.password !== forms.confirmPassword)}
          />
          <Form.Control.Feedback type="invalid">Passwords do not match</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.password}</td>
              <td>
                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
