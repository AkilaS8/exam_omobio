import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function User() {

    const [user, setUser] = useState([]);

    useEffect(async () => {
        let resultList = await fetch("http://localhost:8000/api/userList");
        resultList = await resultList.json();
        setUser(resultList);
    }, []);
    console.warn("result", user);

    return (
        <div className="col-sm-8 offset-sm-2">
            <h1>User List</h1>
            <br></br>
            <Table className="table">
                <tr className="table">
                    <td className="tdata">Id</td>
                    <td className="tdata">Name</td>
                    <td className="tdata">Username</td>
                    <td className="tdata">Email</td>
                </tr>
                {
                    user.map((item) =>
                        <tr className="table">
                            <td className="tdata">{item.id}</td>
                            <td className="tdata">{item.name}</td>
                            <td className="tdata">{item.username}</td>
                            <td className="tdata">{item.email}</td>
                        </tr>)
                }
            </Table>
        </div>
    )
}

export default User
