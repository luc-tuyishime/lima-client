import React from "react";
import { Table, Input, Icon, Form, Select } from 'semantic-ui-react';

const TaskList = ({ taskList, add, deleteRow }) => {
    return (
        taskList.map((val, idx) => {
            let category = `category-${idx}`, quantity = `quantity-${idx}`, stockAvailable = `stockAvailable-${idx}`, unitOfMeasure = `unitOfMeasure-${idx}`, amountInFRW = `amountInFRW-${idx}`
            return (
                <>
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
                        
                        <Input type="text" name="category" data-id={idx} id={category} />
                        <span><Icon name="plus" />New</span>
                    </Table.Cell>
                    <Table.Cell>
                        <Input type="text" name="quantity" id={quantity} data-id={idx} />
                    </Table.Cell>
                    <Table.Cell>
                        <Input name="stockAvailable" id={stockAvailable} data-id={idx} />
                    </Table.Cell>
                    <Table.Cell>
                        <Input name="unitOfMeasure" id={unitOfMeasure} data-id={idx} />
                    </Table.Cell>
                    <Table.Cell>
                        <Input name="amountInFRW" id={amountInFRW} data-id={idx} />
                    </Table.Cell>                  
                </Table.Row>
                <div style={{ paddingTop: '25px', position: 'relative', bottom: '25px' }}>
                 {
                    idx === 0 ? <Icon className="icon-pointer" color="blue" size="large" onClick={() => add()} name='plus circle' />
                     : <Icon className="icon-pointer" color="red" size="large" onClick={(() => deleteRow(val))} name='trash' />
                 }
                 </div>
                </>
            )
        })
    )
}

export default TaskList