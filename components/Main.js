import { useState, useEffect  } from 'react';
import { deleteCustomer, getAllCustomers } from '../services/clientApi';
import {
  Layout,
  Menu,
  Breadcrumb,
  Table,
  Spinner,
  Empty,
  Button,
  Badge,
  Tag,
  Avatar,
  Radio,
  PopconFirm,
  Image,
  Divider,
  Snackbar,
  LoadingOutlined,
  spin
} from '@mui/material';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LoadingOutlined,
  PlusOutlined
} from '@mui/icons-material';
import  CustomerDrawerForm from  "./CustomerDrawerForm";


const removeCustomer = (customerId, callback) => {
  const [content, setContent] = useState('');

  deleteCustomer(customerId).then(() => {
    setContent(`Customer deleted, with id ${customerId}`);
    <Snackbar duration={5000} position="topRight" fade content={content} />
    callback();
  }).catch((err) => {
    err.response.json().then((res) => {
      console.log(res);
      setContent(`There was an issue, ${res.message}`);
      <Snackbar duration={5000} position="bottomLeft" fade content={content} />
    });
  })
}

const columns = fetchStudents => [
    {
        title: '',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, student) =>
            <TheAvatar name={student.name}/>
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, student) =>
            `<Radio.Group>
                <Popconfirm
                    placement='topRight'
                    title={Are you sure to delete ${student.name}}
                    onConfirm={() => removeStudent(student.id, fetchStudents)}
                    okText='Yes'
                    cancelText='No'>
                    <Radio.Button value="small">Delete</Radio.Button>
                </Popconfirm>
                <Radio.Button onClick={() => alert("TODO: Implement edit student")} value="small">Edit</Radio.Button>
            </Radio.Group>`
    }
];

const materialIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
  const [customers, setCustomers] = useState([]);
  const [collapsed, setCollapse] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const [content, setContent] = useState('');
  const [createModal, set]

  const fetchCustomers = () => {
    getAllCustomers
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomers(data);
      }).catch(err => {
        console.log(err.response)
        err.response.json().then(res => {
          console.log(res);
          setContent("There was an issue");
          <Snackbar duration={5000} content={content} />
        });
      }).finally(() => setFetching(false));
  }

  useEffect(() => {
    console.log("component is mounted")
    fetchCustomers();
  }, []);

  const showDeleteModal = (id) => {
    return (

    );
  }

  const showUpdateModal = (id) => {
    return (

    );
  }

  const renderCustomers = () => {
    if(fetching) {
      return (
        <Spin indicator={materialIcon}/>
      );
    }

    if(customers.length <= 0) {
      return (
         <Button onClick={() => setShowDrawer(!showDrawer)} type="primary" shape="round" icon={<PlusOutlined/>} size="small">
           Add New Student
         </Button>
         <CustomerDrawerForm
           showDrawer={showDrawer}
           setShowDrawer={setShowDrawer}
           fetchCustomer={fetchCustomers}
         />
         {/**/}
         <Empty/>
      );
    }

    return (
      <CustomerDrawerForm
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        fetchCustomers={fetchCustomers}/>
        {/**/}
      <div>
        <Table>
          <TableHead>
            <TableRow>
               <TableCell>Avatar</TableCell>
               <TableCell>Id</TableCell>
               <TableCell>Name</TableCell>
               <TableCell>Email</TableCell>
               <TableCell>Gender</TableCell>
               <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {items.map((item) => {
               return (
                 <TableRow key={item.id}>
                   <TableCell component="th" scope="row"> {item.name} </TableCell>
                   <TableCell> {item.email} </TableCell>
                   <TableCell> {item.gender} </TableCell>
                   <TableCell>
                   <Button onClick={() => showUpdateModal(item.id)}>Update</Button>
                       {" "}
                   <Button onClick={() => showDeleteModal(item.id)}>Delete</Button> </TableCell>
                 </TableRow>
               );
             })}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
     <Wrapper>
        <Sidebar />
        <MainContainer>
          <Header />
          <Contents renderContents={renderCustomers} />
        </MainContainer>
        <Footer />
     </Wrapper>
  )
}

const Wrapper = styled.div`
  display: ;
  height: ;
  weight: ;
  background-color: ;
  color: ;
`

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
`;


