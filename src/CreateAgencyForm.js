// CreateAgencyForm.js
import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select, Upload, Row, Col, message } from 'antd';
import { InboxOutlined, BankOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import './CreateAgencyForm.css';

const { Option } = Select;
const { Dragger } = Upload;

const CreateAgencyForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleFormSubmit = async (values) => {
    const formData = new FormData();
    formData.append('type', values.type);
    formData.append('zone', values.zone);
    formData.append('category', values.category);
    formData.append('status', values.status);
    if (values.logo && values.logo.fileList.length) {
      formData.append('logo', values.logo.fileList[0].originFileObj);
    }
    formData.append('nomination', values.nomination);
    formData.append('responsable', values.responsable);
    formData.append('adresse', values.adresse);
    formData.append('telPortable', values.telPortable);
    formData.append('telBureau', values.telBureau);
    formData.append('agenceConfiance', values.agenceConfiance);
    formData.append('cneCin', values.cneCin);

    try {
      const response = await axios.post('http://localhost:8000/api/agencies/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Agency successfully created!');
      console.log(response.data);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Failed to create agency.');
    }
  };

  const handleFileChange = (info) => {
    setFileList(info.fileList);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
      {<Row gutter={24}>
        <Col span={12} className="form-section">
          <h2>Spécifications</h2>
          <Form.Item name="type" label="Type">
            <Radio.Group>
              <Radio value="bureau"><BankOutlined /> Bureau</Radio>
              <Radio value="agent"><UserOutlined /> Agent</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="zone" label="Zone">
            <Select placeholder="Select zone">
              <Option value="zone1">Zone 1</Option>
              <Option value="zone2">Zone 2</Option>
            </Select>
          </Form.Item>
          <Form.Item name="category" label="Catégorie">
            <Select placeholder="Select category">
              <Option value="cat1">Category 1</Option>
              <Option value="cat2">Category 2</Option>
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Statut">
            <Select placeholder="Select status">
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item name="logo" label="Logo">
            <Dragger
              name="logo"
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
              customRequest={dummyRequest}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
          </Form.Item>
        </Col>
        <Col span={12} className="form-section">
          <h2>Informations de l'Agence</h2>
          <Form.Item name="nomination" label="Nomination">
            <Input />
          </Form.Item>
          <Form.Item name="responsable" label="Responsable">
            <Input />
          </Form.Item>
          <Form.Item name="adresse" label="Adresse">
            <Input />
          </Form.Item>
          <Form.Item name="telPortable" label="Tel Portable">
            <Input />
          </Form.Item>
          <Form.Item name="telBureau" label="Tel Bureau">
            <Input />
          </Form.Item>
          <Form.Item name="agenceConfiance" label="Ag. Confiance">
            <Input />
          </Form.Item>
          <Form.Item name="cneCin" label="CNE / CIN">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Enregistrer la Création
            </Button>
          </Form.Item>
        </Col>
      </Row>}
    </Form>
  );
};

export default CreateAgencyForm;
