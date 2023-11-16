//Invoice Detail Component
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();


function InvoiceDetails() {
    const [invoices, setInvoices] = useState([]);

    //To extract the Invoice Details of the User 
    useEffect(() => {
        const token = cookies.get("TOKEN");
        axios.get('http://localhost:3001/invoice-details', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                if (response.data.status == "ok") {
                    console.log(response.data.data);
                    setInvoices(response.data.data);
                }
                if (response.data.status == "Something Went Wrong") {
                    console.log("Something Went Wrong");
                }

                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container mt-5 pt-5 d-flex justify-content-center">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Invoice Amount</th>
                        <th scope="col">Invoice Due</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        invoices.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.email}</td>
                                    <td>{item.invoice_amount}</td>
                                    <td>{item.invoice_due}</td>
                                </tr>
                            </React.Fragment>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(InvoiceDetails)