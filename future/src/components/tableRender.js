import React from "react";

const TableRender = (props) => {
    const data = props.data
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'id')}>
                        id
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'firstName')}>
                        First Name
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'lastName')}>
                        Last Name
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'email')}>
                        Email Name
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'phone')}>
                        phone
                        </button>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                        <tr key={item.id + item.phone}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableRender