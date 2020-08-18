import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Select, Input} from 'antd'
const Item = Form.Item
const Option = Select.Option

class AddForm extends Component {

    static propTypes = {
        parentId: PropTypes.string.isRequired,
        categorys: PropTypes.array.isRequired,
        setForm: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.setForm(this.props.form)
    }

    render() {
        const { parentId, categorys } = this.props
        const { getFieldDecorator } = this.props.form

        return (
            <Form className="add-form">
                <Item label='Parent Category'>
                    {getFieldDecorator('parentId', {
                        initialValue: parentId,
                        rules: [{ required: true}],
                    })(
                        <Select>
                            {/*  这里犯错  箭头函数  如果使用了 {} 就得return ,否则就不要*/}
                            <Option value='0' key='0'>First Level</Option>
                            {
                                categorys.map(c => {
                                    return <Option value={c._id} key={c._id}>{c.name}</Option>
                                })
                            }
                        </Select>
                    )}
                </Item>
                <Item label='Name'>
                    {getFieldDecorator('categoryName', {
                        initialValue: '',
                        rules: [{ required: true, message: '分类名称必须输入' }],
                    })(
                        <Input placeholder="请输入分类名称"/>,
                    )}
                </Item>
            </Form>
        )
    }
}

export default Form.create({ name: 'add_form' })(AddForm)