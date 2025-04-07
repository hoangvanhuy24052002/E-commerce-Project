// src/components/dashboard/UserDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Container className="py-5">
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {userInfo?.name}<br />
                <strong>Email:</strong> {userInfo?.email}<br />
                <strong>Member Since:</strong> {userInfo?.createdAt ? new Date(userInfo.createdAt).toLocaleDateString() : 'N/A'}
              </Card.Text>
              <Button as={Link} to="/profile" variant="primary">
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>My Orders</Card.Title>
              <Card.Text>
                View and track your recent orders
              </Card.Text>
              <Button as={Link} to="/orders" variant="primary">
                View Orders
              </Button>
            </Card.Body>
          </Card>
          
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Shopping Cart</Card.Title>
                  <Card.Text>
                    {cartItems.length === 0 ? (
                      'Your cart is empty'
                    ) : (
                      `You have ${cartItems.length} items in your cart`
                    )}
                  </Card.Text>
                  <Button as={Link} to="/cart" variant="primary">
                    View Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Shipping Address</Card.Title>
                  <Card.Text>
                    Manage your shipping addresses
                  </Card.Text>
                  <Button as={Link} to="/shipping" variant="primary">
                    Manage Addresses
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {userInfo?.isAdmin && (
            <Card className="mb-4 bg-light">
              <Card.Body>
                <Card.Title>Admin Controls</Card.Title>
                <Card.Text>
                  Manage products, users, and orders
                </Card.Text>
                <Button as={Link} to="/admin" variant="danger">
                  Admin Dashboard
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
