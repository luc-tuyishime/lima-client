import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";


class RequisitionForms extends Component {
    render() {
        return (
            <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                           Stock Requisition
                        </Card.Content>
                        <Card.Content>
                           <div>Stock Requisition</div>
                        </Card.Content>
                    </Card>
                </Card.Group>
        )
    }
}

export default RequisitionForms