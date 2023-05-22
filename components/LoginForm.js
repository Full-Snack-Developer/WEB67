import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";

const LoginForm = () => {
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
        WELCOME
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
          style={{ width: "400px", marginTop: "10px" }}
          className="font-medium"
          style={{
            boxShadow:
              "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
          }}
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="nochecked" noStyle>
          <Checkbox className="font-medium">Remember me</Checkbox>
        </Form.Item>

        <a
          className="login-form-forgot font-medium"
          href=""
          style={{ marginLeft: "170px" }}
        >
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button font-medium"
          style={{ width: "100px", height: "40px", background: "#1F2937" }}
        >
          Log in
        </Button>

        <Button
          type="primary"
          // htmlType="submit"
          className="login-form-button font-medium"
          style={{
            marginLeft: "20px",
            width: "100px",
            height: "40px",
            background: "#1F2937",
          }}
        >
          <Link href="/RegisterScreen">Sign up</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
