import React from "react";
import { Table, Input, Icon, Form, Select } from 'semantic-ui-react';

const TaskList = ({ taskList, add, deleteRow }) => {
    return (
        taskList.map((val, idx) => {
            let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
            return (
                <Table.Row key={val.index}>
                    <Table.Cell>
                        <Form.Field
                        id="select-project"
                        control={Select}
                        // options={site}
                        placeholder="Select...."
                        name="site"
                        search
                        />
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="text" name="category" data-id={idx} id={projectName} />
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="text" name="quantity" id={task} data-id={idx} />
                    </Table.Cell>
                    <Table.Cell>
                        <Input name="stockAvailable" id={taskNotes} data-id={idx} />
                    </Table.Cell>
                    <Table.Cell>
                        <Input name="unitOfMeasure" id={taskNotes} data-id={idx} />
                    </Table.Cell>
                    <Table.Cell>
                        {
                            idx === 0 ? <Icon className="icon-pointer" color="blue" size="large" onClick={() => add()} name='plus circle' />
                                : <Icon className="icon-pointer" color="red" size="large" onClick={(() => deleteRow(val))} name='trash' />
                        }
                    </Table.Cell>
                </Table.Row>
            )
        })
    )
}

export default TaskList