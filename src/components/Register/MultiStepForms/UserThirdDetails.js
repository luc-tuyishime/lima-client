import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';

import { zone } from '../../../helpers/userRegistration/zone';
import { site } from '../../../helpers/userRegistration/site';
import Btn from '../../common//Button/Button';
import '../Register.scss';


class UserThirdDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { form } = this.props;
        return (

            <Form>
                <Form.Input
                    label="Individual Land in Are"
                    placeholder="Individual Land in Are"
                    name="individualLandinAre"
                    type="text"
                    onChange={this.props.handleChange('individualLandinAre')}
                    defaultValue={form.individualLandinAre}
                />
                <Form.Field
                    id="select"
                    control={Select}
                    label='Zone'
                    onChange={this.props.handleChange('zone')}
                    options={zone}
                    placeholder='Zone....'
                    name='zone'
                    search
                    defaultValue={form.zone || ""}
                />
                <Form.Field
                    id="select"
                    control={Select}
                    label='Site'
                    onChange={this.props.handleChange('site')}
                    options={site}
                    placeholder='Size....'
                    name='site'
                    search
                    defaultValue={form.site || ""}
                />
                <Form.Input
                    label="Membership fees(Frw)"
                    placeholder="Membership fees(Frw)..."
                    name="membershipFees"
                    type="text"
                    onChange={this.props.handleChange('membershipFees')}
                    defaultValue={form.membershipFees}
                />
                <Form.Input
                    label="Profile Picture"
                    placeholder="Profile Picture"
                    name="profilePicture"
                    type="text"
                    onChange={this.props.handleChange('profilePicture')}
                    defaultValue={form.profilePicture}
                />
                <Btn className="back-confirm" onClick={this.back}>BACK</Btn>
                <Btn className="confirm" onClick={this.saveAndContinue}>SAVE AND CONTINUE</Btn>
            </Form>
        )
    }
}

export default UserThirdDetails;