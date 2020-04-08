import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import Btn from '../../common/Button/Button';
import '../Register.scss';

class Success extends Component {
   state = {
      form: {
         one: '',
         two: '',
         three: '',
         four: '',
         five: '',
         six: '',
      },
      errors: '',
      loading: false,
      message: '',
   };

   handleChange = (_, data) => {
      const { form } = this.state;
      return data.value === '' ||
         (/^\d+$/.test(data.value) && data.value.length === 1)
         ? this.setState({
              form: {
                 ...form,
                 [data.name]: data.value,
              },
           })
         : '';
   };

   render() {
      const { form } = this.state;
      return (
         <div>
            <p className="text-digits">
               Enter the six digits we have sent you via SMS
            </p>
            <Form className="form-digits">
               <Form.Input
                  id="form-code"
                  className="block"
                  name="one"
                  type="text"
                  onChange={this.handleChange}
                  value={form.one || ''}
               />
               <Form.Input
                  id="form-code"
                  className="block"
                  name="two"
                  type="text"
                  onChange={this.handleChange}
                  value={form.two || ''}
               />

               <Form.Input
                  id="form-code"
                  className="block"
                  name="three"
                  type="text"
                  onChange={this.handleChange}
                  value={form.three || ''}
               />
               <Form.Input
                  id="form-code"
                  className="block"
                  name="four"
                  type="text"
                  onChange={this.handleChange}
                  value={form.four || ''}
               />

               <Form.Input
                  id="form-code"
                  className="block"
                  name="five"
                  type="text"
                  onChange={this.handleChange}
                  value={form.five || ''}
               />

               <Form.Input
                  id="form-code"
                  className="block"
                  name="six"
                  type="text"
                  onChange={this.handleChange}
                  value={form.six || ''}
               />
               <Btn className="btn-sign-in">NEXT</Btn>
            </Form>
         </div>
      );
   }
}

export default Success;
