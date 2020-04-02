import React, { Component } from 'react';

import UserFirstDetails from './UserFirstDetails';
import UserSecondDetails from './UserSecondDetails';
import UserThirdDetails from './UserThirdDetails';
import UserFourthDetails from './UserFouthDetails';
import Confirmation from './Confirmation';
import Success from './Success';



export class MainForm extends Component {
    state = {
        step: 1,
        form: {
            accountType: '',
            firstName: '',
            lastName: '',
            personalID: '',
            email: '',
            phone: '',
            province: '',
            district: '',
            sector: '',
            village: '',
            birth: '',
            individualLandinAre: '',
            zone: '',
            site: '',
            membershipFees: '',
            profilePicture: '',
            password: '',
            confirmPassword: ''
        }
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => (_, data) => {
        const { form } = this.state;
        this.setState({
            form: { ...form, [input]: data.value }
        })

        console.log(form);
    }

    render() {
        const { form, step } = this.state;
        // eslint-disable-next-line default-case
        switch (step) {
            case 1:
                return <UserFirstDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    form={form}
                />
            case 2:
                return <UserSecondDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    form={form}
                />
            case 3:
                return <UserThirdDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    form={form}
                />
            case 4:
                return <UserFourthDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    form={form}
                />
            case 5:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    form={form}
                />
            case 6:
                return <Success />
        }

    }
}

export default MainForm;
