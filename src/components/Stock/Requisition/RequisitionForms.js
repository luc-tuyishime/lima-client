import React, { Component } from 'react';
import { Card, Table, Form, Select } from 'semantic-ui-react';

import TaskList from './RequisitionFormList';
import Btn from '../../common/Button/Button';
import './requisition.scss';


class RequisitionForms extends Component {
    state = {
        taskList: [
            {
                index: Math.random(),
                productName: "",
                category: "",
                quantity: "",
                stockAvailable: "",
                unitOfMeasure: ""
            }
        ],
    }

    handleChange = (e) => {
        if (["productName", "category", "quantity", "stockAvailable", "unitOfMeasure"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addNewRow = (e) => {
        this.setState((prevState) => (
            {
            taskList: [...prevState.taskList,
             { 
                index: Math.random(), 
                productName: "", 
                category: "", 
                quantity: "", 
                stockAvailable: "" 
             }
           ],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
    }

    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }

    render() {
        let { taskList } = this.state
        return (
            <Card.Group className="table-card">
                <Card fluid>
                    <Card.Content className="header-bg-color">
                        Stock Requisition
                    </Card.Content>
                    <Card.Content>
                        <div id="aquisition" className="scroll-aquisition">
                            <Form onChange={this.handleChange}>
                            
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id="select"
                                    control={Select}
                                    label="Request by"
                                    onChange={this.handleChange}
                                    // options={gender}
                                    placeholder="Request by...."
                                    name="gender"
                                    search
                                    // value={form.gender || ""}
                                    // error={errors.gender}
                                />
                                <Form.Field
                                    id="select"
                                    control={Select}
                                    label="Payment method"
                                    onChange={this.handleChange}
                                    // options={gender}
                                    placeholder="Request by...."
                                    name="gender"
                                    search
                                    // value={form.gender || ""}
                                    // error={errors.gender}
                                />
                            </Form.Group> 
                            <Form.Group widths='equal'>
                            <Form.Input
                                    label="Total Amount (frw)"
                                    placeholder="Total amount(frw)...."
                                    name="totalAmount"
                                    type="text"
                                    // onChange={this.handleChange}
                                    // value={form.email || ""}
                                    // error={errors.email}
                                />
                                <Form.Input
                                    label="Amount paid"
                                    placeholder="amount paid......"
                                    name="amountPaid"
                                    type="text"
                                    // onChange={this.handleChange}
                                    // value={form.firstName || ""}
                                    // error={errors.firstName}
                                />
                                
                            </Form.Group>                                       
                                    <Table singleLine>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Project Name</Table.HeaderCell>
                                                <Table.HeaderCell>Category</Table.HeaderCell>
                                                <Table.HeaderCell>Quantity</Table.HeaderCell>
                                                <Table.HeaderCell>Stock available</Table.HeaderCell>
                                                <Table.HeaderCell>Unit of measure</Table.HeaderCell>
                                                <Table.HeaderCell>Action</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            <TaskList add={this.addNewRow} deleteRow={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </Table.Body>
                                    </Table>
                                <Btn primary className="btn-requisition">Send Request</Btn>
                            </Form>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

export default RequisitionForms