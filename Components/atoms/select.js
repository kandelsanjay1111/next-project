import React from 'react'
import { Select } from 'antd';

const {Option}=Select;

const MultiSelect = (props) => {
    const {handleChange,profession}=props;
  return (
    <Select
    mode="multiple"
    placeholder="Select Profession"
    style={{width:"100%"}}
    name="profession"
    value={profession}
    onChange={(value)=>handleChange(value)}
    allowClear
    >
        <Option key="one">Software Engineer</Option>
        <Option key="two">Civil Engineer</Option>
        <Option key="three">Accountant</Option>
    </Select>
  )
}

export default MultiSelect;