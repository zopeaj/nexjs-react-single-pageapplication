import { addNewCustomer } from "..services/clientApi";
import { Snackbar } from "../components/Snackbar";
import { Drawer, Row, Col, Form, Spin } from "@mui/material";
import { circle } from "@mui/icons-material";


export const CustomerDrawerForm({ showDrawer, setShowDrawer, fetchCustomer }) => {
  const onClose = () => setShowDrawer(false);
  const [subMitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState('');
  const [position, setPosition] = useState('');

  const onFinish = customer => {
    setSubmitting(true);
    console.log(JSON.stringify(customer, null, 2));
    addNewCustomer(customer).then(() => {
    console.log("customer added");
    onClose();
    setShow(true);
    setContent(`CustomerAdded Successfully added ${customer.name}`);
    <Snackbar duration={5000} position="topRight" fade content={content} />
    setPosition('topRight');
    fetchCustomer();
  }).catch((err) => {
    console.log(err);
    err.response.json().then((res) => {
      setContent(`There was an issue ${res.message} [${res.status}] [${res.error}]`);
          setPosition("bottomLeft");
      });
    }).finally(() => {
      setSubmitting(false);
    })
  };

  return (
    <Drawer
        title="Create New Customer"
        width={720}
        onClose={onClose}
        visible={showDrawer}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{marginRight: 8}}>
              Cancel
            </Button>
          </div>
        }
    >
     <form onSubmit={onFinish}>
       <Row gutter={16}>
         <Col span={12}>
           <Form.Item name="name" label="name"
               rules={[{ required: true, message: 'Please enter customer name' }]}>
               <Input placeholder="Please enter customer name"/>
           </Form.Item>
         </Col>
         <Col span={12}>
           <Form.Item name="email" label="email" rules={[{ required: true, message: 'Please enter customer email' }]}>
             <Input placeholder="Please enter customer email"/>
           </Form.Item>
         </Col>
       </Row>

       <Row gutter={16}>
         <Col span={12}>
           <Form.Item name="gender" label="gender" rules={[{ required: true, message: "Please select a gender" }]}>
             <Select placeholder="Please select a gender">
               <Option value="MALE">MALE</Option>
               <Option value="FEMALE">FEMALE</Option>
               <Option value="OTHER">OTHER</Option>
             </Select>
           </Form.Item>
         </Col>
       </Row>

       <Row>
         <Col span={12}>
           <Form.Item>
             <Button type="submit" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Col>
       </Row>
       <Row>
         {submitting && <Spin indicator={circle} />}
       </Row>
     </form>
    </Drawer>
  )
}

export default CustomerDrawerForm
