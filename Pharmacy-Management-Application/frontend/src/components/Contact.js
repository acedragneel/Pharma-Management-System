import "../styles/Contact.css";
import { useState } from "react";



const Contact = ({id,fullName, email, message, city}) => { 
  const [count, setcount] = useState(false);
  return (
                        <tr scope="row">
                            <th scope="row">{id}</th>
                            <td>{fullName}</td>
                            <td>{email}</td>
                            <td>{message}</td>
                            <td>{city}</td>
                        </tr>
            // <div class="container">
            // <div class="row">
            //   <div class="col-md">{id}</div>
            //   <div class="col-md">{fullName}</div>
            //   <div class="col-md">{email}</div>  
            //   <div class="col-md">{message}</div>
            //   <div class="col-md">{city}</div>
            //   </div>
            // </div>
  );
};

export default Contact;
