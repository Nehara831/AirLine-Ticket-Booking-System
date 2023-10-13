

// import React, { useState } from 'react';

// import { PlusOutlined } from '@ant-design/icons';
// import './UserRegistration.css'
// import NavigationHeader from '../../componenets/NavigationHeaderFolder/NavigationHeader';
// import image from '../../asserts/Bag.png';
// import axios from 'axios';

// import {
//   Button,
//   DatePicker,
//   Form,
//   Input,
//   message
 
// } from 'antd';





// const FormDisabledDemo = ({onClose}) => {

//   const [form] = Form.useForm();

//   const [formData, setFormData] = useState({
    
//     username: '',
//     password: '',
// });
// const handleChange = (e) => {
//   setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//   });
// };
// const handleSignUp = async () => {
//   try {
//     console.log(formData);
//       const response = await axios.post('http://localhost:8080/users', formData);
//       message.success('Registration successful!');
//       // You may redirect the user or clear the form here
//   } catch (error) {
//       message.error('Registration failed. Please try again.');
//   }

// };

// const handleFormSubmit = () => {
//   handleSignUp();
//    onClose();
//  };

//   return (
//     <>
   
   
//     <div className='Form'>
//     <div className='SignUplabel'> Sign Up Now!</div>
//       <Form 
//       form={form}
//       layout='vertical'
//        className="formContainer"
//        onFinish={handleFormSubmit} 
//       >
       
//        <Form.Item label="First Name" 
//        rules={[{ required: true, message: 'Please input your first name!' , type: 'email'}]}>
//                 <Input name="firstName" value={formData.firstName}  />
//             </Form.Item>

//             <Form.Item label="Last Name"
//             rules={[{ required: true, message: 'Please input your last name!' }]}>
//                 <Input name="lastName" value={formData.lastName}  />
//             </Form.Item>
//             <Form.Item label="Email Address" 
//             rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
//                 <Input name="username" value={formData.username} onChange={handleChange} />
//             </Form.Item>

//             <Form.Item label="Password"
//              rules={[{ required: true, message: 'Please input your password!' }]}
//              >
//                 <Input.Password name="password" value={formData.password} onChange={handleChange} />
//             </Form.Item>
//             <Form.Item>
//                 <Button type="primary"  htmlType="submit">Create an Account</Button >
//             </Form.Item>
//       </Form>
     
//       </div>
     
    
//     </>
    
//   );
// };

// export default FormDisabledDemo;

import React from 'react';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';
import './UserRegistration.css';

const FormDisabledDemo = ({ onClose }) => {

  const handleSignUp = async (formData) => {
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:8080/users', formData);
      message.success('Registration successful!');
      if (onClose) {
        onClose();
      }
    } catch (error) {
      message.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className='Form'>
      <div className='SignUplabel'> Sign Up Now!</div>
      <Form 
        layout='vertical'
        className="formContainer"
        onFinish={handleSignUp}  // Use onFinish instead of an onClick handler on the button
      >
        <Form.Item 
          label="First Name" 
          name="firstName"  // Add the name prop so Form knows how to store the value in internal state
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Email Address" 
          name="username"
          rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create an Account</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormDisabledDemo;
