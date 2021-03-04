import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

function AppContact() {
  return (
    <div id='contact' className='block contactBlock'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>Get in Touch</h2>
          <p>Contact us to know more.</p>
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
        >
          <Form.Item
            name='fullname'
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder='Full Name' />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type='email' placeholder='Email Address' />
          </Form.Item>

          <Form.Item name='subject'>
            <Input placeholder='Subject' />
          </Form.Item>

          <Form.Item name='telephone'>
            <Input placeholder='Mobile Number' />
          </Form.Item>

          <Form.Item name='message'>
            <TextArea placeholder='Message' />
          </Form.Item>

          <Form.Item
            name='agreement'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>I have read the agreement.</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
