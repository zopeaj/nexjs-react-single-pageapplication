import { Card, CardContent, Typography, CardHeader, Avatar} from "@mui/material";
import { PersonIcon } from "@mui/icons-material";
import styled from "styled-components";
import { cardStyles } from "../styes/cardStyles";


export const Content = ({  }) => {
  const [showCustomerDrawer, setShowCustomerDrawer] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 1, name: "Emily Lesch", email: "emilylesch@zopeaj.com", age: 29, gender: "FEMALE" },
    { id: 2, name: "Claude Pacocha", email: "claude.pacocha@zopeaj.com", age: 88, gender: "MALE" },
    { id: 3, name: "Lou Parisian", email: "lou.parisian@zopeaj.com", age: 87, gender: "FEMALE" },
    { id: 4, name: "Jed Carter", email: "jed.carter@zopeaj.com", age: 93, gender: "FEMALE", },
    { id: 5, name: "Carmia Wisozk", email: "carmia.wisozk@zopeaj.com", age: 28, gender: "MALE" }
  ]);

  const onCreateCustomerClick = (e) => {
    showCustomerDrawer(true);
  };

  const onDeleteCustomerClick = (e) => {
    setDeleteModal(true);
  }

  const onUpdateCustomerClick = (e) => {
    setUpdateModal(true)
  }

  return (
      <CardContainer>
        <Button>
            <ButtonCreateCustomer onClick={onCreateCustomerClick}>Create Customer</ButtonCreateCustomer>
        </Button>
        <Card className={cardStyles.card}>
          {customers.map((customer, index) => (
            <CardData>
              <CardHeader title={customer.name} subHeader="Legend" avatar={
                <Avatar>
                  <PersonIcon/>
                </Avatar>}
             />
             <CardContent>
               <Typography variant="h6">{customer.id}</Typography>
               <Typography variant="h4">{customer.name}</Typography>
               <p>{customer.email}</p>
               <Typography>{customer.age} | {customer.gender}</Typography>
               <ButtonDisplay>
                 <ButtonUpdate onClick={onUpdateCustomerClick}>Update</ButtonUpdate>
                 <ButtonDelete onClick={onDeleteCustomerClick}>Delete</ButtonDelete>
               </ButtonDisplay>
             </CardContent>
            </CardData>
          ))}
        </Card>
      </CardContainer>
  )
}


const CardContainer = styled.div`

`;

const ButtonUpdate = styled.button`

`;

const ButtonDelete = styled.button`

`;

const ButtonCreateCustomer = styled.button`

`;

const Button = styled.div`

`;



