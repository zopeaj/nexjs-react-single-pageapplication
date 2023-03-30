const API_ROOT = "localhost:8080";


const checkStatus = response => {
  if(response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}

export const getAllCustomers = () => {
  fetch(API_ROOT + "/api/v1/customers").then(checkStatus);
}

export const addNewCustomer = customer => {
   fetch(API_ROOT + "/api/v1/customers", {
     headers: {
       'Content-Type': "application/json";
     },
     method: 'POST',
     body: JSON.stringify(customer)
   }).then(checkStatus)
}

export const updateCustomer = (customerId, customer) => {
  fetch(API_ROOT + `/api/students/${customerId}`, {
    headers: {
      'Content-Type': "application/json"
    },
    method: "PUT",
    body: JSON.stringify(customer)
  }).then(checkStatus);
}

export const deleteCustomer = customerId => {
  fetch(API_ROOT + `/api/v1/customer${customerId}`, {
    method: "DELETE"
  }).then(checkStatus)
}
