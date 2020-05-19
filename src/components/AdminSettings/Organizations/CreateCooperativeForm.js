import React, { Component } from 'react';
import { Card, Table, Icon, Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProvinces, getDistrictByProvinces, getSectorsByDistricts } from '../../../actions/cooperative';

import Btn from '../../common/Button/Button';
import '../../../assets/css/table.scss';

class CreateOrganizationForm extends Component {

    state = {
        form: {
        province: '',
        districtByProvince: '',
        sectors: ''
      },
      provinces: [],
      districtsByProvinces: [],
      sectorsByDistricts: [],
      errors: {},
      loadingProvinces: false,
      loadingSectorsByDistricts: false,
      loading: false,
      message: '',
      key: ''
        
    }

    componentDidMount = () => {
        const { getProvinces } = this.props;
        getProvinces();
    };

  getLocations = (data, key) => {
    const { getDistrictByProvinces, getSectorsByDistricts } = this.props;
    if (data.name === 'province') {
      console.log('gere', key);
      return getDistrictByProvinces(key);
    }
    if (data.name === 'districtByProvince') {
      console.log('gere', key);
      return getSectorsByDistricts(key);
    }
  };

    handleChange = (_, data) => {
      const { getDistrictByProvinces, getSectorsByDistricts } = this.props;
      const { key } = data.options.find((e) => e.text === data.value);
 
      const { form, errors } = this.state;
      this.setState({
         form: { ...form, [data.name]: data.value },
         errors: { ...errors, [data.name]: null },
         loading: false,
         message: '',
         key: key
      });
      
      this.getLocations(data, key);
   };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('nextProps', nextProps);
        this.setState({
            loadingProvinces: nextProps.loading,
            loading: nextProps.loadingDistrictsByProvinces,
            loadingSectorsByDistricts: nextProps.loadingSectorsByDistricts,
            provinces: nextProps.listOfProvinces,
            districtsByProvinces: nextProps.listOfDistrictsByProvinces,
            sectorsByDistricts: nextProps.listOfSectorsByDistricts
        });
         
        return this.setState;
    };

    render() {
        const { form, key, loading, loadingProvinces, sectorsByDistricts,
         provinces, districtsByProvinces, loadingSectorsByDistricts } = this.state;

        // Provinces
        const names = provinces.map((name) => {
           return {
               key: name.id,
               text: name.name,
               value: name.name
           }
        })

        // District by Provinces 
         const districtByProvince = districtsByProvinces.map((name) => {
           return {
               key: name.id,
               text: name.name,
               value: name.name
           }
        })

         // District by Provinces 
         const sectorByDistricts = sectorsByDistricts.map((name) => {
           return {
               key: name.id,
               text: name.name,
               value: name.name
           }
        })

        return (
            <>
                <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            Create Cooperative
                  </Card.Content>
                        <Card.Content>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Cooperative Name"
                                        placeholder="Cooperative Name...."
                                        name="CooperativeName"
                                        type="text"
                                    // onChange={this.handleChange}
                                    // value={form.email || ""}
                                    // error={errors.email}
                                    />
                                    <Form.Field
                                        loading={loadingProvinces}
                                        id="select"
                                        control={Select}
                                        label="Province"
                                        onChange={this.handleChange}
                                        options={names}
                                        placeholder="Select province"
                                        name="province"
                                        value={form.province || ""}
                                    // error={errors.gender}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        loading={loading}
                                        id="select"
                                        control={Select}
                                        label="District"
                                        onChange={this.handleChange}
                                        options={districtByProvince}
                                        placeholder="Select district"
                                        name="districtByProvince"
                                        value={form.districtByProvince || ""}
                                    // error={errors.gender}
                                    />
                                    <Form.Field
                                        loading={loadingSectorsByDistricts}
                                        id="select"
                                        control={Select}
                                        label="Sector"
                                        onChange={this.handleChange}
                                        options={sectorByDistricts}
                                        placeholder="Select sector"
                                        name="sectors"
                                        value={form.sectors || ""}
                                    // error={errors.gender}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id="select"
                                        control={Select}
                                        label="Cell"
                                        // onChange={this.handleChange}
                                        // options={gender}
                                        placeholder="Select sell"
                                        name="cell"
                                    // value={form.gender || ""}
                                    // error={errors.gender}
                                    />
                                    <Form.Field
                                        id="select"
                                        control={Select}
                                        label="village"
                                        // onChange={this.handleChange}
                                        // options={gender}
                                        placeholder="Village"
                                        name="village"
                                    // value={form.gender || ""}
                                    // error={errors.gender}
                                    />
                                </Form.Group>

                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Contact Person Name"
                                        placeholder="contact person name"
                                        name="contactPersonName"
                                        type="text"
                                    // onChange={this.handleChange}
                                    // value={form.password || ""}
                                    // error={errors.password}
                                    />
                                    <Form.Input
                                        label="Contact Person National ID"
                                        placeholder="Contact person national ID"
                                        name="cpnID"
                                        type="text"
                                    // onChange={this.handleChange}
                                    // value={form.password || ""}
                                    // error={errors.password}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Contact Phone"
                                        placeholder="phone"
                                        name="phone"
                                        type="text"
                                    // onChange={this.handleChange}
                                    // value={form.password || ""}
                                    // error={errors.password}
                                    />
                                    <Form.Input
                                        label="License Number"
                                        placeholder="License number"
                                        name="licenseNumber"
                                        type="text"
                                    // onChange={this.handleChange}
                                    // value={form.password || ""}
                                    // error={errors.password}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Contact Person Email"
                                        placeholder="contact person email"
                                        name="contactPersonEmail"
                                        type="text"
                                    // onChange={this.handleChange}
                                    // value={form.password || ""}
                                    // error={errors.password}
                                    />
                                    <Form.Input
                                        label="Password"
                                        placeholder="password"
                                        name="password"
                                        type="password"
                                    // onChange={this.handleChange}
                                    // value={form.password || ""}
                                    // error={errors.password}
                                    />
                                </Form.Group>

                                <Btn type="submit" className="btn-sign-in" primary>
                                    CREATE
                               </Btn>
                            </Form>
                        </Card.Content>
                    </Card>
                </Card.Group>
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}

const mapStateToProps = ({
    user: { profile },
    cooperative: { 
        listOfProvinces, 
        fetchProvinces: { loading, message, errors }, 
        listOfDistrictsByProvinces,
        listOfSectorsByDistricts,
        fetchDistrictsByProvinces: {
            loading: loadingDistrictsByProvinces
        },
        fetchSectorsByDistricts: {
            loading: loadingSectorsByDistricts
        }
        }}) => ({
        listOfProvinces,
        listOfDistrictsByProvinces,
        listOfSectorsByDistricts,
        profile,
        loading,
        message,
        errors,
        loadingDistrictsByProvinces,
        loadingSectorsByDistricts
    });

export default connect(mapStateToProps, 
{ getProvinces, getDistrictByProvinces, getSectorsByDistricts })(CreateOrganizationForm);
