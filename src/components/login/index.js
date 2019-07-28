/**
 *   首页登入页面
 */
import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import FormItem from 'antd/lib/form/FormItem';

//@Form.create()
class Login extends React.Component {
    componentDidMount() {

    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (<div className='login'>
            <div className='login-form'>
                <div className='login-logo'>
                    <h3>系统登录</h3>
                </div>
                <Form>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名' }]
                        })(
                            <Input
                                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }}></Icon>} placeholder='账号'>

                            </Input>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passWord', {
                            rules: [{ required: true, message: '请输入密码' }]
                        })(
                            <Input
                                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }}></Icon>} placeholder='密码'>

                            </Input>
                        )}
                    </FormItem>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox className='checkpassword'>记住密码</Checkbox>)}
                        <div className="login-form-forgot">
                            <a href="##">
                                忘记密码?
          </a>
                            或<a href="##">现在注册</a>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
          </Button>

                    </Form.Item>

                </Form>
            </div>
        </div>)
    }
}
export default Form.create()(Login)