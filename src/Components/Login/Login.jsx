import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './Login.css'; // Import your custom CSS file
import axios from 'axios'; // Import Axios
import Joi from 'joi'; // Import Joi
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom


export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message

  const emailSchema = Joi.string().email({ tlds: { allow: false } }).required();
  const passwordSchema = Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-])[A-Za-z\d@$!%*?&\-]+$/)
    .min(8)
    .required()
    .error(() => {
      return new Error(
        'Password must contain 9 characters'
      );
    });

  const onFinish = async (values) => {
    setLoading(true); // Set loading state to true before Axios request
    try {
      await schema.validateAsync(values);
      const response = await axios.post('http://195.35.29.81:8004/api/User/Login', {
        email: values.username,
        password: values.password
      });
      console.log('API Response:', response.data);
      // Save token to state
      // Navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        // Unauthorized (incorrect email or password)
        // Extract message from response data and set error message state
        const errorMessage = error.response.data?.[0] || 'Invalid login!';
        setErrorMessage(errorMessage); // Set error message state
      } else {
        // Other error (network error, server error, etc.)
        // Handle error, e.g., display error message to the user
      }
    } finally {
      setLoading(false); // Set loading state to false after Axios request completes or encounters an error
    }
  };

  const validateEmail = async (_, value) => {
    try {
      await emailSchema.validateAsync(value);
    } catch (error) {
      throw new Error('Please enter a valid email address');
    }
  };

  const validatePassword = async (_, value) => {
    try {
      await passwordSchema.validateAsync(value);
      setPasswordError('');
    } catch (error) {
      setPasswordError(error.message);
    }
  };

  const schema = Joi.object({
    username: emailSchema,
    password: passwordSchema
  });

  return (
    <div className="login-page">
      <div className="login-container px-10 py-3">
        <Form 
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish} 
        >
          <h3 className="carrefour-logo mb-4" style={{color:'red'}}>Goods</h3>  
          <h4 className="login-form-label mx-5">Login to your account</h4>
          {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
          <Form.Item
          validateTrigger="onBlur"
            name="username"
            rules={[
              { required: true, message: 'Please input your Username!' },
              { validator: validateEmail }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            validateTrigger="onBlur"
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError}
            rules={[
              { required: true, message: 'Please input your Password!' },
              { validator: validatePassword }
            ]}
          >
            <Input 
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" danger htmlType="submit" className="log-in-btn col-12" loading={loading} size='large'>
              Log in
            </Button>
            <div className="col-12 mt-3 text-center">
              <div className="horizontal-line-wrapper">
                <div className="horizontal-line mx-2"></div>
                <span className="text-muted">Don't Have an account?</span>
                <div className="horizontal-line mx-2"></div>
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <Link to="/register" type="primary" htmlType="submit" className=" btn btn-outline-primary col-12" size='large'>
              Register
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
