// import React, {
//     Component
// } from 'react';
// import { Link} from 'react-router-dom'; 
// import { Form,Button, Grid, Segment, Divider} from 'semantic-ui-react';
// import axios from 'axios';

// /* ................................ 
// .........Main App class ...........
// ..................................*/
               
// class UserRegister extends Component {
    
//     constructor(props){
//         super(props);
//         this.state={
//             username:'',
//             password:'',
//             email:'',
//             contact:'',
//             description:'',
//             first_name:'',
//             last_name:'',
//             middle_name:'',
//             location:'',
//             dob:''
//         };
//         this.register=this.register.bind(this);
//     }
    
//     handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
//     render() {
//         const { username, password,email,contact,description, first_name,last_name,middle_name,location,dob } = this.state;
//         return ( 
//         <Grid  centered >
//         <Grid.Column width={12} >
//         <Segment inverted >
//         <Form inverted >
//             <Form.Group widths="equal">
//             <Form.Input label='Username' placeholder='Username' name="username" value={username} onChange={this.handleChange}/>
//             <Form.Input label='Password' placeholder='Password' type='password' name="password" value={password} onChange={this.handleChange}/>
//             </Form.Group>
//             <Form.Input label='Email' placeholder='Email' name="email" value={email} onChange={this.handleChange}/>
//             <Form.Input label='Contact number' placeholder='Contact' name="contact" value={contact} onChange={this.handleChange}/>
//             <Form.Input label='Description' placeholder='description' name="description" value={description} onChange={this.handleChange}/>
//             <Form.Group widths="equal">
//             <Form.Input label='First Name' placeholder='First Name' name="first_name" value={first_name} onChange={this.handleChange}/>
//             <Form.Input label='Middle Name' placeholder='Middle Name' name="middle_name" value={middle_name} onChange={this.handleChange}/>
//             <Form.Input label='Last Name' placeholder='Last Name' name="last_name" value={last_name} onChange={this.handleChange}/>
//             </Form.Group>
//             <Form.Input label='Location' placeholder='Location' name="location" value={location} onChange={this.handleChange}/>
//             <Form.Input label='Date of Birth (DD/MM/YYYY)' placeholder='DD/MM/YYYY' name="dob" value={dob} onChange={this.handleChange}/>
            
            
//             <Button type='submit' onClick={this.register}>Register</Button>
            
//           </Form>
//           </Segment>
//           </Grid.Column>
//           </Grid>  
//         );
//     }

//     register(){
        
//         console.log(JSON.stringify(this.state));
//         axios.post(config.get('base_url')+this.props.match.url,this.state)
//           .then(function (response) {
//             console.log(response);
            
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//     }
        
// }


// export default UserRegister;

import React, { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import './UserRegistration.css'
import NavigationHeader from '../../componenets/NavigationHeaderFolder/NavigationHeader';
import image from '../../asserts/Bag.png';
import axios from 'axios';

import {
  Button,
  DatePicker,
  Form,
  Input,
  message
 
} from 'antd';





const FormDisabledDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
});
const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value,
  });
};
const handleSubmit = async () => {
  try {
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', formData);
      message.success('Registration successful!');
      // You may redirect the user or clear the form here
  } catch (error) {
      message.error('Registration failed. Please try again.');
  }
};
  return (
    <>
   <NavigationHeader/>
   <div className='Imag'>
    <div className='Form'>
    <div className='SignUplabel'> Sign Up Now!</div>
      <Form onFinish={handleSubmit}
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 25 }}
        layout="vertical"
        disabled={false}
        style={{ maxWidth: 600 }}
      >
       
       <Form.Item label="First Name">
                <Input name="firstName" value={formData.firstName} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Last Name">
                <Input name="lastName" value={formData.lastName} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Email Address">
                <Input name="email" value={formData.email} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Password">
                <Input.Password name="password" value={formData.password} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Create an Account</Button>
            </Form.Item>
      </Form>
     
      </div>
      <div className='Container' style={{ backgroundImage: `url(${image})` }} >

</div>
      {/* <img src='../asserts/Suitcases.png' alt="Your Image" /> */}
      </div>
    </>
    
  );
};

export default () => <FormDisabledDemo />;
