import React from 'react'
import {render,screen,waitFor} from '@testing-library/react'
import PurchaseOrderAdd from '../modules/scm-purchase-order/PurchaseOrderAdd'
import SupplierCard from '../modules/scm-purchase-order/components/SupplierCard'
import { BrowserRouter as Router} from "react-router-dom";

jest.mock('../modules/scm-purchase-order/components/SupplierCard')
SupplierCard.mockImplementation(props => props.data)

test("should display a blank purchase order add form", () => {


  function getPOAdd(){
    render(
      <Router>
       <PurchaseOrderAdd />
      </Router>
    )
  }

  getPOAdd()

});

test("should called the supplier card component", async() => {
  const data = {
    email:'princepasombaran@gmail.com',
    phone_no:'081213507373',
    web_address:'www.forsa.com',
    contact:{
      first_name:'prince',
      last_name:'pasombaran'
    }
  }

  const {container} = await render(<SupplierCard data={data}/>)

  expect(container.firstChild).toBeInTheDocument()

});
