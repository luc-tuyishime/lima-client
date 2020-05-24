import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';

import Btn from '../../common/Button/Button';

class AddNewHarvest extends Component {
    render() {
        return (
            <div className="stock">
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input
                            label="Farmer name"
                            placeholder="Farmer name...."
                            name="farmerName"
                            type="text"
                        />
                        <Form.Field
                            id="select"
                            control={Select}
                            label="Product name"
                            //    options={organizationType}
                            placeholder="Product name...."
                            name="productName"
                            search
                        />
                    </Form.Group>
                    <Form.Group unstackable widths={2}>
                        <Form.Field
                            id="select"
                            control={Select}
                            label="Incomig quatity"
                            //    options={relationPO}
                            placeholder="incoming quantity...."
                            name="quantity"
                            search
                        />
                        <Form.Input
                            label="Status"
                            placeholder="status...."
                            name="Status"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            label="Qty in Stock"
                            placeholder="Qty in Stock...."
                            name="quantityStock"
                            type="text"
                        />
                        <Form.Input
                            label="Unit"
                            placeholder="Unit...."
                            name="unit"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            label="Initial stock"
                            placeholder="Initial stock...."
                            name="initialStock"
                            type="text"
                        />
                    </Form.Group>
                    <Btn className="btn-add-stock">
                        SAVE
                     </Btn>
                </Form>
            </div>
        )
    }
}

export default AddNewHarvest;