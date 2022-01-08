import React, { useState, useEffect } from 'react';
import {SearchOutlined} from "@ant-design/icons"
import { Select } from 'antd';
import './Payment.css'
const { Option } = Select;



const Payment = () => {
  const [ search , setSearch ] = useState(0);
  const nameFunction = (a) => {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByClassName("myInput")[0];
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("myTable")[0];
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

    function handleChange(value) {
      console.log(`selected ${value}`);
    }


    const countryFunction = () => {
      let input1, filter1, table1, tr1, td1, i1, txtValue1;
      input1 = document.getElementsByClassName("myInput")[1];
      filter1 = input1.value.toUpperCase();
      table1 = document.getElementsByClassName("myTable")[0];
      tr1 = table1.getElementsByTagName("tr");
      for (i1 = 0; i1 < tr1.length; i1++) {
        td1 = tr1[i1].getElementsByTagName("td")[1];
        if (td1) {
          txtValue1 = td1.textContent || td1.innerText;
          if (txtValue1.toUpperCase().indexOf(filter1) > -1) {
            tr1[i1].style.display = "";
          } else {
            tr1[i1].style.display = "none";
          }
        }
      }
      }

    // let input1, filter1, table1, tr1, td1, i1, txtValue1;
    // input1 = document.getElementById("myInput");
    // filter1 = input.value.toUpperCase();
    // table1 = document.getElementById("myTable");
    // tr1 = table.getElementsByTagName("tr");
    // for (i1 = 0; i1 < tr1.length; i1++) {
    //   td1 = tr1[i1].getElementsByTagName("td")[1];
    //   if (td1) {
    //     txtValue1 = td1.textContent || td1.innerText;
    //     if (txtValue1.toUpperCase().indexOf(filter1) > -1) {
    //       tr1[i1].style.display = "";
    //     } else {
    //       tr1[i1].style.display = "none";
    //     }
    //   }
    // }


  
  

  return (

    <div>
        <div>
          <div className="search-bar">
            <input className="myInput" type="text" id="myInput" onChange={nameFunction} placeholder=" Search for names ..."  title="Type in a name" />

            <input className="myInput" type="text" id="myInput" onChange={countryFunction} placeholder=" Search for country ..."  title="Type in a name" />

            <span><SearchOutlined /></span>
          </div>
          <div>
              <Select defaultValue="name" style={{ width: 120 }}>
                  <Option onClick={()=>setSearch(0)} value="name">Name</Option>
                  <Option onClick={()=>setSearch(1)} value="country">Country</Option>
              </Select>
          </div>
        </div>
      <div className="table-payment">
      <table className="myTable" id="myTable">

          <tr className="header">
            <th style={{width:"60%"}}>Name</th>
            <th style={{width:"40%"}}>Country</th>
          </tr>


          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Koniglich Essen</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Paris specialites</td>
            <td>France</td>
          </tr>

      </table>
      </div>
    </div>
  );
}

export default Payment;



