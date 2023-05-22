import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <a className="font-bold" style={{ fontSize: "30px" }}>
        GET YOUR ACCOUNT
      </a>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
        className="font-medium"
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          style={{
            width: "400px",
            marginTop: "10px",
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          }}
          className="font-medium"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        className="font-medium"
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          className="font-medium"
          style={{
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          }}
        />
      </Form.Item>
      <Form.Item
        name="confirmpassword"
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
        ]}
        className="font-medium"
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
          className="font-medium"
          style={{
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          }}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="nochecked" noStyle>
          <Checkbox className="font-medium">Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button font-medium"
          style={{ width: "100px", height: "40px", background: "#1F2937" }}
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegisterForm;
