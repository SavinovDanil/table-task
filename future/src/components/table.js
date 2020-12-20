import React, {Component} from "react";
import TableRender from "./tableRender";
import Loader from "./loader/Loader";
import _ from 'lodash'

export default class Table extends Component {

    state = {
        Loading: true,
        data: {},
        sort: 'asc',
        sortField:'id'
    }


    async componentDidMount() {
        const res = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
        const data = await res.json()
        console.log(data)
        this.setState({
            Loading:false,
            data
        })
    }
    onSort = (sortField) => {
        const cloneData = this.state.data.concat()
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
        const orderedData = _.orderBy(cloneData, sortField, sortType)
        this.setState({
            data: orderedData,
            sort: sortType,
            sortField
        })
        console.log(sortField)
    }


    render() {
        return (
            <div>
                {this.state.Loading ? <Loader/> : <TableRender data={this.state.data} onSort={this.onSort}/>}
            </div>
        )
    }
}