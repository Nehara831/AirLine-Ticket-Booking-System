// Import necessary components from 'antd'
import { Form, Input, Button, DatePicker, Radio, Select, Checkbox } from 'antd';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegChat.css'
import NavigationHeader from '../../componenets/NavigationHeaderFolder/NavigationHeader';






const PassengerInformationForm = ({clearForm,onSubmit}) => {

  const [form] = Form.useForm();  
  const { Option } = Select;
const navigate = useNavigate();
  const handleButtonClick = () => {
 
   
   navigate(`/seatSelector`);
  };
  // Function to handle form submission
  const onFinish = (values) => {
    console.log('Received values:', values);
    
  };

  const handleFormSubmit = (values) => {
    onSubmit(values);  // Call the onSubmit prop when the form is submitted
    form.resetFields();  // Optionally reset the form immediately
  };
  const [areFieldsEnabled, setAreFieldsEnabled] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    setAreFieldsEnabled(e.target.checked);
  };
   const [passengerName, setPassengerName] = useState('John Doe');
   
   useEffect(() => {
    form.resetFields();
  }, [clearForm, form]);

  return (
    <div>
    

      <div className="header">
      {/* <NavigationHeader/> */}
      </div>

      <Form form={form} layout="vertical" onFinish={handleFormSubmit} className="form-container">
        <div>
        <h1 className='header11'>Passenger Information </h1>
        </div>

       
          <h2 className="header2">Passenger 1 Information</h2>
    <div className="horizontal-fields">
    <Form.Item name="firstName" className="textbox">
        <Input placeholder="First Name" />
    </Form.Item>
    <Form.Item name="middleName" className="textbox">
        <Input placeholder="Middle Name" />
    </Form.Item>
    <Form.Item name="lastName" className="textbox">
        <Input placeholder="Last Name" />
    </Form.Item>
</div>
<div className="horizontal-fields">
    <Form.Item name="suffix" className="textbox">
        <Input placeholder="Suffix" />
    </Form.Item>
    <Form.Item name="dateOfBirth" className="textbox">
        <Input placeholder="Date of Birth" />
    </Form.Item>
</div>
<div className="horizontal-fields">
    <Form.Item name="email" className="textbox-middle">
        <Input placeholder="Email" />
    </Form.Item>
    <Form.Item name="contactNumber1" className="textbox">
        <Input placeholder="Contact Number 1" />
    </Form.Item>
    <Form.Item name="age" className="textbox">
        <Input placeholder="Age" />
    </Form.Item>
</div>
<div className="horizontal-fields">
    <Form.Item name="adress" className="textbox-large">
        <Input placeholder="Adress" />
    </Form.Item>
   
</div>

<h2 className="header2">Emergency Contact Information</h2>
<Checkbox onChange={handleCheckboxChange} style={{ marginBottom: '10px' }}>Same as Passenger 1</Checkbox>
    <div className="horizontal-fields">
    <Form.Item name="firstName" className="textbox">
        <Input placeholder="First Name" disabled={!areFieldsEnabled}/>
    </Form.Item>
    
    <Form.Item name="lastName" className="textbox">
        <Input placeholder="Last Name" disabled={!areFieldsEnabled}/>
    </Form.Item>
</div>
<div className="horizontal-fields">
    <Form.Item name="firstName" className="textbox">
        <Input placeholder="Email" disabled={!areFieldsEnabled}/>
    </Form.Item>
    <Form.Item name="middleName" className="textbox">
        <Input placeholder="Contact Number1"  disabled={!areFieldsEnabled}/>
    </Form.Item>
    <Form.Item name="middleName" className="textbox">
        <Input placeholder="Contact Number2"  disabled={!areFieldsEnabled}/>
    </Form.Item>
</div>


    <div>
          <h2 className="header2">Bag Information</h2>
          <p style={{ width: '500px', textAlign: 'justify' }}>    Each passenger is allowed one free carry-on bag and one personal item.
    First checked bag for each passenger is also free.
    Second bag check fees are waived for loyalty program members.
</p>

          <div className="horizontal-fields2">
          <Form.Item label="Passenger 1" className="textbox">
          <div>{passengerName}</div>
        </Form.Item>
          <Form.Item name="checkedBags" label="Checked Bags" className="textbox">
            <Select placeholder="Select Number of Bags">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Form.Item>
          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="button">
            Save   
          </Button>
          <Button 
  className={`button ${"button-spacing"}`} 
  onClick={handleButtonClick}
>
  Select Seats
</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PassengerInformationForm;
