import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table, Label, Modal, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";
import TaskList from './NewOperationFormList';

import Btn from '../../common/Button/Button';

 import './operation.scss';

class NewOperationForms extends Component {
    
      state = {
        taskList: [
            {
                index: Math.random(),
                productName: "",
                category: "",
                quantity: "",
                stockAvailable: "",
                unitOfMeasure: "",
                amountInFRW: ""
            }
        ],
        open: false
    }

    handleChange = (e) => {
        if (["productName", "category", "quantity", "stockAvailable", "unitOfMeasure", "amountInFRW"].includes(e.target.name)) {
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
                stockAvailable: "",
                unitOfMeasure: "",
                amountInFRW: ""
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
                            New entry
                        </Card.Content>
                        <Card.Content>
                             <Form>
                                <Form.Group>
                                  <Form.Field
                                    width={3}
                                    id="select"
                                    control={Select}
                                    label="Operation type"
                                    // options={gender}
                                    placeholder="OPeration type"
                                    name="gender"
                                    search
                                />
                                 <SemanticDatepicker
                                    
                                    label="Operation date"
                                    placeholder="From"
                                    name='birth'
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Input
                                    width={3}
                                    fluid
                                    label='Invoice number'
                                    placeholder='number'
                                />
                                <Form.Input
                                    width={3}
                                    fluid
                                    label='Reference number'
                                    placeholder='number'
                                />
                                </Form.Group>
                            </Form>
                            <div id="aquisition" className="scroll-aquisition">
                            <form onChange={this.handleChange}>                                       
                                    <Table singleLine>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Entry type</Table.HeaderCell>
                                                <Table.HeaderCell>Account name</Table.HeaderCell>
                                                <Table.HeaderCell>Account No</Table.HeaderCell>
                                                <Table.HeaderCell>Account Type</Table.HeaderCell>
                                                <Table.HeaderCell>Description</Table.HeaderCell>
                                                <Table.HeaderCell>Amount in FRW</Table.HeaderCell>
                                                <Table.HeaderCell>Action</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            <TaskList add={this.addNewRow} deleteRow={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </Table.Body>
                                    </Table>
                                <Btn primary className="btn-requisition">Send Request</Btn>
                            </form>
                        </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
        )
    }
}

export default NewOperationForms 