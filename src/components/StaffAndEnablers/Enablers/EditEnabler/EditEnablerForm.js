import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import Btn from '../../../common/Button/Button';

import './EditEnabler.scss';

class EditEnablerForm extends Component {
    render() {
        return (
            <>
                <div className="enabler-edit">Enabler details</div>
                <Form className="form-edit-style">
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Organization'
                            placeholder='organization'
                        />
                        <Form.Input
                            fluid
                            label='Organization Type'
                            placeholder='Organization Type'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Organization'
                            placeholder='organization'
                        />
                        <Form.Input
                            fluid
                            label='Organization Type'
                            placeholder='Organization Type'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Organization'
                            placeholder='organization'
                        />
                        <Form.Input
                            fluid
                            label='Organization Type'
                            placeholder='Organization Type'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Organization'
                            placeholder='organization'
                        />
                        <Form.Input
                            fluid
                            label='Organization Type'
                            placeholder='Organization Type'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Organization'
                            placeholder='organization'
                        />
                        <Form.Input
                            fluid
                            label='Organization Type'
                            placeholder='Organization Type'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Organization'
                            placeholder='organization'
                        />
                        <Form.Input
                            fluid
                            label='Organization Type'
                            placeholder='Organization Type'
                        />
                    </Form.Group>
                    <div className="center-btn-edit">
                        <Btn className="btn-sign-in btn-width-half">EDIT</Btn>
                    </div>
                </Form>
            </>
        )
    }
}

export default EditEnablerForm
