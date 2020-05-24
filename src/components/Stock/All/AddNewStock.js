import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Btn from '../../common/Button/Button';
import { getCooperative } from '../../../actions/cooperative';
import { mapValues } from '../../../helpers/mapValues';

class AddNewStock extends Component {
    
    state = {
     form: {
        cooperative: '',
        invoiceNumber: '',
        provider: '',
        quantity: '',
        unitePrice: ''
     },
     cooperative: []
    }

    componentDidMount = () => {
        console.log(this.props);
        const { getCooperative } = this.props;
        getCooperative();
    };

     handleChange = (_, data) => {      
      const { form } = this.state;
      this.setState({
         form: { ...form, [data.name]: data.value },
         loading: false,
         message: ''
      });
   };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('Next props ==>', nextProps);
        this.setState({
            cooperative: nextProps.listOfCooperative
        });

        return this.setState;
    }

    render() {
        const { cooperative, form } = this.state;
        console.log(form);
        const displayCooperative = cooperative.map(mapValues);
        return (
            <div className="stock">
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Field
                            id="select"
                            control={Select}
                            label="Cooperative"
                            options={displayCooperative}
                            onChange={this.handleChange}
                            placeholder="Select cooperative"
                            name="cooperative"
                            search
                        />
                        <Form.Input
                            label="Invoice number"
                            placeholder="Invoice number...."
                            onChange={this.handleChange}
                            name="invoiceNumber"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group unstackable widths={2}>
                        <Form.Input
                            label="Provider"
                            placeholder="Provider...."
                            onChange={this.handleChange}
                            name="provider"
                            type="text"
                        />
                        <Form.Input
                            label="Quantity"
                            placeholder="Quantity...."
                            onChange={this.handleChange}
                            name="quantity"
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            label="Unit price"
                            placeholder="Unit price...."
                            onChange={this.handleChange}
                            name="unitePrice"
                            type="text"
                        />
                    </Form.Group>
                    <Btn className="btn-add-stock">
                        CREATE
                     </Btn>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({
    cooperative: {
        listOfCooperative,
    } }) => ({
        listOfCooperative,
    });

export default connect(mapStateToProps, { getCooperative })(AddNewStock);