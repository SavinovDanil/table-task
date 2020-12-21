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
                        id {props.sortField === 'id' ? <div>{props.sort}</div> : null}
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'firstName')}>
                        First Name {props.sortField === 'firstName' ? <div>{props.sort}</div> : null}
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'lastName')}>
                        Last Name {props.sortField === 'lastName' ? <div>{props.sort}</div> : null}
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'email')}>
                        Email Name {props.sortField === 'email' ? <div>{props.sort}</div> : null}
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={props.onSort.bind(null, 'phone')}>
                        phone {props.sortField === 'phone' ? <div>{props.sort}</div> : null}
                        </button>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {data.map(item => (
                        <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
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