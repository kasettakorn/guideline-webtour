import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  EnvironmentFilled,
  HomeFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Modal } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleOk = (key) => {
    this.setState({
      confirmLoading: true,
    });
    let soundUrl = "";
    if (key == 1) soundUrl = "/sounds/tu1.m4a";
    else if (key == 2) soundUrl = "/sounds/tu2.m4a";
    else if (key == 3) soundUrl = "/sounds/tu3.m4a";
    else soundUrl = "/sounds/tu4.m4a";
    let audio = new Audio(process.env.PUBLIC_URL + soundUrl);
    audio.play();
    // audio.onended = function () {
    //   setTimeout(() => {
    //     this.setState({
    //       visible: false,
    //       confirmLoading: false,
    //     });
    //   }, 2000);
    // }.bind(this);
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 3000);
  };
  componentDidMount() {
    this.setState({
      visible: true,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Router>
        {this.state.visible ? (
          <div>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              confirmLoading={this.state.confirmLoading}
              onOk={()=>this.handleOk(4)}
              onCancel={this.handleCancel}
            >
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="ชื่อผู้ใช้งาน"
                  name="username"
                  rules={[
                    { required: true, message: "กรุณากรอกชื่อผู้ใช้งาน" },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item> */}
              </Form>
            </Modal>
          </div>
        ) : null}
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu onClick={(value) => this.handleOk(value.key)} theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeFilled />}>
                <Link
                  to="/thailand-mob-support-system/"
                  style={{ textDecoration: "none" }}
                >
                  หน้าหลัก
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<EnvironmentFilled />}>
                <Link
                  to="/thailand-mob-support-system/support"
                  style={{ textDecoration: "none" }}
                >
                  ข่าวการเมือง
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<InfoCircleFilled />}>
                <Link
                  to="/thailand-mob-support-system/searchLocation"
                  style={{ textDecoration: "none" }}
                >
                  เศรษฐกิจ
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0, color: "white", fontSize: 18 }}
            ></Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 600 }}
              ></div>
            </Content>
            <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                {" "}
                www.flaticon.com
              </a>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
