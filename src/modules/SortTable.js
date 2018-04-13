import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import DataTable from '../config/TableData';

class SortTable extends React.Component {
    constructor(props) {
        super();
        this.options = {
            defaultSortName: 'name',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };
    }

    componentDidMount() {
        let height = 200;
        const tableElement = document.getElementsByClassName('react-bs-container-body')[0];
        tableElement.style.maxHeight = height + 'px';
        const table = document.getElementsByClassName('react-bs-table-bordered')[0];
        table.style.border = 0;
    }

    customFormat = (cell, row) => {
        return (
            <div style={{color: '#fff', border: 'none', display: 'flex', alignItems: 'center'}}>
                <div>{row.time}</div>
            </div>
        )
    };

    status = (cell, row) => {
        return (
            <div className='d-flex align-items-baseline'>
                <span className={'StatusTable ' + ((row.status === 'Active') ? 'StatusTableActive' : 'StatusTableDisabled')}></span>
                <span>{row.status}</span>
            </div>
        )
    };

    render() {
        return (
                <BootstrapTable data={DataTable} bodyStyle={{ textAlign: 'center', color: '#fff', background: 'transparent'}}
                                striped hover>
                    <TableHeaderColumn isKey dataField='campaign' dataSort>Campaign <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='time' dataSort dataFormat={this.customFormat}>Time <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='views' dataSort>Views <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='visitors' dataSort>Visitors <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='ctr' dataSort>CTR <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='cpc' dataSort>CPC <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='cpv' dataSort>CPV <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='cpm' dataSort>CPM <span className='fas fa-angle-down'></span></TableHeaderColumn>
                    <TableHeaderColumn dataField='status' dataFormat={this.status} dataSort>Status<span className='fas fa-angle-down'></span></TableHeaderColumn>
                </BootstrapTable>
            );
        }
    }

export default SortTable;