import React, { Component } from 'react';
import { Card, Table, Icon, Form, Select, Message } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProvinces, getDistrictByProvinces, 
getSectorsByDistricts, getCellsBySectors, 
getVillagesByCell, createCooperative } from '../../../actions/cooperative';
import { mapValues } from '../../../helpers/mapValues';

import Btn from '../../common/Button/Button';
import '../../../assets/css/table.scss';

const customId2 = "custom-id-yes2";

class CreateOrganizationForm extends Component {

    state = {
        form: {
        name: '',
        province: '',
        districtByProvince: '',
        sectors: '',
        cells: '',
        cooperativeVillageId: '',
        contactPersonName: '',
        contactPersonNationalId: '',
        contactPhone: '',
        licenseNumber: '',
        contactEmail: '',
        password: ''
      },
      provinces: [],
      districtsByProvinces: [],
      sectorsByDistricts: [],
      cellsBySectors: [],
      villagesByCell: [],
      errors: {},
      loadingProvinces: false,
      loadingSectorsByDistricts: false,
      loadingCellsBySectors: false,
      loading: false,
      message: '',
      key: '',
      errorUp: ''
        
    }

    componentDidMount = () => {
        const { getProvinces } = this.props;
        getProvinces();
    };

  getLocations = (data, key) => {
    const { getDistrictByProvinces, getSectorsByDistricts, 
    getCellsBySectors, getVillagesByCell } = this.props;
    if (data.name === 'province') {
      return getDistrictByProvinces(key);
    }
    if (data.name === 'districtByProvince') {
      return getSectorsByDistricts(key);
    }
    if (data.name === 'sectors') {
      return getCellsBySectors(key);
    }
    if (data.name === 'cells') {
      return getVillagesByCell(key);
    }
  };

    handleChange = (_, data) => {
        console.log('data', data);
       if(data.options){
            const { key } = data.options.find((e) => e.value === data.value);
            this.getLocations(data, key);
        }
      
      const { form, errors } = this.state;
      this.setState({
         form: { ...form, [data.name]: data.value },
         errors: { ...errors, [data.name]: null },
         loading: false,
         message: ''
      });
   };

    static getDerivedStateFromProps = (props) => {
        console.log('props ==>', props);
        const alertMessage = (props.messageCooperative && toast.success('Cooperative created, thank you..', {
        toastId: customId2
        }));
        const cellsLoading = props && props.fetchCellsBySectors;
        return {
            loadingProvinces: props.loading,
            loading: props.loadingDistrictsByProvinces,
            loadingSectorsByDistricts: props.loadingSectorsByDistricts,
            loadingCellsBySectors: cellsLoading && cellsLoading.loading,
            provinces: props.listOfProvinces,
            districtsByProvinces: props.listOfDistrictsByProvinces,
            sectorsByDistricts: props.listOfSectorsByDistricts,
            cellsBySectors: props.listOfCellsBySectors,
            villagesByCell: props.listOfVillagesByCell,
            errorUp: props.errorsCooperative
        };
         
        // return this.setState && alertMessage;
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { createCooperative } = this.props;
      const { errors, form } = this.state;
      const { ...formData } = form;
    //   const formErrors = validateLima(form, 'newUser');

      this.setState({ errors: { ...errors } });

    //   if (!Object.keys(formErrors).length) {
    //      createUser(formData);
    //   }
    createCooperative(formData)
   };

    render() {
        const { loadingCooperative } = this.props;
        const { form, errors, key, loading, loadingProvinces, sectorsByDistricts,
         provinces, districtsByProvinces, loadingSectorsByDistricts, 
         loadingCellsBySectors, cellsBySectors, villagesByCell, errorUp } = this.state;

        const names = provinces.map(mapValues)
         const districtByProvince = districtsByProvinces.map(mapValues);
         const sectorByDistricts = sectorsByDistricts.map(mapValues);
         const cellBySectors = cellsBySectors && cellsBySectors.map(mapValues); 
         const villageByCell = villagesByCell && villagesByCell.map(mapValues);

        return (
            <div>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            {(errorUp && Object.values(errorUp).length > 0) ? (
               <Message color='red'>
                     <p style={{textAlign: 'center'}}>Please fill all the input fields</p>
               </Message>
            ) : ''}
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Cooperative Name"
                                        placeholder="Cooperative Name...."
                                        name="name"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={form.name || ""}
                                        error={errors.name}
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
                                        error={errors.province}
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
                                        error={errors.districtByProvince}
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
                                        error={errors.sectors}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        loading={loadingCellsBySectors}
                                        id="select"
                                        control={Select}
                                        label="Cell"
                                        onChange={this.handleChange}
                                        options={cellBySectors}
                                        placeholder="Select sell"
                                        name="cells"
                                        value={form.cells || ""}
                                        error={errors.cells}
                                    />
                                    <Form.Field
                                        id="select"
                                        control={Select}
                                        label="village"
                                        onChange={this.handleChange}
                                        options={villageByCell}
                                        placeholder="Village Id"
                                        name="cooperativeVillageId"
                                        value={form.cooperativeVillageId || ""}
                                        error={errors.cooperativeVillageId}
                                    />
                                </Form.Group>

                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Contact Person Name"
                                        placeholder="contact person name"
                                        name="contactPersonName"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={form.contactPersonName || ""}
                                        error={errors.contactPersonName}
                                    />
                                    <Form.Input
                                        label="Contact Person National ID"
                                        placeholder="Contact person national ID"
                                        name="contactPersonNationalId"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={form.contactPersonNationalId || ""}
                                        error={errors.contactPersonNationalId}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Contact Phone"
                                        placeholder="phone"
                                        name="contactPhone"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={form.contactPhone || ""}
                                        error={errors.contactPhone}
                                    />
                                    <Form.Input
                                        label="License Number"
                                        placeholder="License number"
                                        name="licenseNumber"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={form.licenseNumber || ""}
                                        error={errors.licenseNumber}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Contact Person Email"
                                        placeholder="contact person email"
                                        name="contactEmail"
                                        type="email"
                                        onChange={this.handleChange}
                                        value={form.contactEmail || ""}
                                        error={errors.contactEmail}
                                    />
                                    <Form.Input
                                        label="Password"
                                        placeholder="password"
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        value={form.password || ""}
                                        error={errors.password}
                                    />
                                </Form.Group>

                                <Btn type="submit" className="btn-sign-in" primary loading={loadingCooperative}>
                                    CREATE
                               </Btn>
                            </Form>
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </div>
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
        listOfCellsBySectors,
        listOfVillagesByCell,
        fetchDistrictsByProvinces: {
            loading: loadingDistrictsByProvinces
        },
        fetchSectorsByDistricts: {
            loading: loadingSectorsByDistricts
        },
        fetchCellsBySectors,
        createCooperative: {
            loading: loadingCooperative,
            message: messageCooperative,
            errors: errorsCooperative
        }
        }}) => ({
        listOfProvinces,
        listOfDistrictsByProvinces,
        listOfSectorsByDistricts,
        listOfCellsBySectors,
        listOfVillagesByCell,
        profile,
        loading,
        message,
        errors,
        loadingDistrictsByProvinces,
        loadingSectorsByDistricts,
        fetchCellsBySectors,
        loadingCooperative,
        messageCooperative,
        errorsCooperative
    });

export default connect(mapStateToProps, 
{ getProvinces, getDistrictByProvinces, getSectorsByDistricts, 
getCellsBySectors, getVillagesByCell, createCooperative })(CreateOrganizationForm);
