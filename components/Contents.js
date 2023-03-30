import { Grid } from "@mui/material";

const Contents = ({ renderCustomers }) => {
  return (
     <div>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            {renderCustomers()}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        <Image
            width={75}
            src="https://user-images.githubusercontent.com/40702606/110871298-0ab98d00-82c6-11eb-88e8-20c4d5c9ded5.png"
        />
      <Divider>
        <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://amigoscode.com/p/full-stack-spring-boot-react">
        Click here to access Fullstack Spring Boot & React for professionals
        </a>
      </Divider>
    </Footer>
   </div>
  );
}
