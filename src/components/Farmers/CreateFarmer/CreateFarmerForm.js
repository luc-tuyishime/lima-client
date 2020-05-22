import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, Grid, Button, Form, Select, Input } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { ToastContainer, toast } from 'react-toastify';

import { getOrganization, getZoneByCooperative, getSiteByZone } from '../../../actions/organization';
import { getProvinces, getDistrictByProvinces, getSectorsByDistricts, getCellsBySectors, 
getVillagesByCell } from '../../../actions/cooperative';
import { gender } from "../../../helpers/userRegistration/gender";
import { mapValues } from '../../../helpers/mapValues';
import { cropCultivated } from '../../../helpers/farmer/cropCultivated';
import { types } from '../../../helpers/farmer/type';
import { status } from '../../../helpers/farmer/status';
import { create } from '../../../actions/farmer';

import "../../../assets/css/scroll.scss";
import "../../../assets/css/table.scss";
import "../../../assets/css/scroll.scss";
import "./CreateFarmer.scss";

class CreateFarmerForm extends Component {
	
    state = {
		form: {
          cooperative: '',
          cooperativeZone: '',
          cooperativeSite: '',
          cropCultivated: '',
          cultivatedSize: '',
          dateOfBirth: '',
          email: '',
          farmerType: '',
          firstName: '',
          gender: '',
          lastName: '',
          membershipAmount: '',
          nationalId: '',
          nationality: '',
          phoneNumber: '',
          status: '',
          province: '',
          districtByProvince: '',
          sectors: '',
          cells: '',
          villageId: ''

        },
        loading: false,
        loadingZone: false, 
        loadingSite: false,
        loadingDistricts: false,
        loadingSectors: false,
        loadingCell: false,
        message: '',
        Organizations: [],
        zone: [],
        site: [],
        provinces: [],
        districtByProvinces: [],
        sectorsByDistricts: [],
        cellsBySectors: [],
        villagesByCell: [],
	};

    getLocations = (data, key) => {
    const { getZoneByCooperative, getSiteByZone, 
            getDistrictByProvinces, getSectorsByDistricts, 
            getCellsBySectors, getVillagesByCell } = this.props;
    if (data.name === 'cooperative') {
      return getZoneByCooperative(key);
    }
    if (data.name === 'cooperativeZone') {
      return getSiteByZone(key);
    }
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
       if(data.options){
            const { key } = data.options.find((e) => e.value === data.value);
            this.getLocations(data, key);
        }
      
      const { form } = this.state;
      this.setState({
         form: { ...form, [data.name]: data.value },
         loading: false,
         message: ''
      });
   };

    componentDidMount = () => {
        const { getOrganization, getProvinces } = this.props;
        getOrganization();
        getProvinces();
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const newError = nextProps && nextProps.errorsFarmer;
        const alertMessage = (nextProps.messageFarmer && toast.success(nextProps.messageFarmer))
          || (newError === 'Request failed with status code 400' ? 
          toast.error('Please fill all the input fields') : '');
        this.setState({
            Organizations: nextProps.listOfOrganization,
            zone: nextProps.listOfZoneByCooperative,
            site: nextProps.listOfSiteByZone,
            provinces: nextProps.listOfProvinces,
            districtByProvinces: nextProps.listOfDistrictsByProvinces,
            sectorsByDistricts: nextProps.listOfSectorsByDistricts,
            loading: nextProps.loading,
            loadingZone: nextProps.loadingZone,
            loadingSite: nextProps.siteLoading,
            loadingSectors: nextProps.loadingSectorsByDistricts,
            loadingCells: nextProps.loadingCells,
            cellsBySectors: nextProps.listOfCellsBySectors,
            villagesByCell: nextProps.listOfVillagesByCell
            
        });
         
        return this.setState && alertMessage;
    };

     handleSubmit = (e) => {
      e.preventDefault();
      const { create } = this.props;
      const { errors, form } = this.state;
      const { ...formData } = form;
      this.setState({ errors: { ...errors } });
       create(formData)
   };


	render() {
        const { createFarmerLoading } = this.props;
        const { Organizations, zone, site, form, errors, 
        loading, loadingZone, loadingSite, provinces,
         loadingDistricts, districtByProvinces, 
         sectorsByDistricts, loadingSectors, cellsBySectors, 
         loadingCells, villagesByCell } = this.state;

        const displayOrganizations = Organizations.map(mapValues);
        const displayZone = zone.map(mapValues);
        const displaySite = site.map(mapValues);
        const displayProvince = provinces.map(mapValues);
        const displayDistricts = districtByProvinces.map(mapValues);
        const displaySectors = sectorsByDistricts.map(mapValues);
        const displayCells = cellsBySectors.map(mapValues);
        const displayVillage = villagesByCell.map(mapValues);

        console.log('Forms =>', form);
		return (
			<div>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
				<Card.Group className='table-card scroll-style'>
					<Card fluid>
						<Card.Content className='header-bg-color'>
							Farmer's registration form
						</Card.Content>
						<Form onSubmit={this.handleSubmit}>
							<Grid>
								<Grid.Column floated='left' width={8}>
									<div
										id='edit-scroll'
										className='left-padding'
									>
										<Form.Field
                      loading={loading}
                      id="select"
                      control={Select}
                      label="Cooperative"
                      onChange={this.handleChange}
                      options={displayOrganizations}
                      placeholder="cooperative"
                      name="cooperative"
                      value={form.cooperative || ""}
                      // error={errors.cooperative}
                      search
                  />
                  <Form.Field
                      loading={loadingZone}
                      id="select"
                      control={Select}
                      label="Cooperative Zone"
                      onChange={this.handleChange}
                      options={displayZone}
                      placeholder="cooperativeZone"
                      name="cooperativeZone"
                      value={form.cooperativeZone || ""}
                      // error={errors.cooperativeZone}
                  />
                  
                  <Form.Field
                      loading={loadingSite}
                      id="select"
                      control={Select}
                      label="Cooperative Site"
                      onChange={this.handleChange}
                      options={displaySite}
                      placeholder="cooperative Site"
                      name="cooperativeSite"
                      value={form.cooperativeSite || ""}
                      // error={errors.cooperativeSite}
                  />

									<Form.Field
                      id="select"
                      control={Select}
                      label="Crop Cultivated"
                      onChange={this.handleChange}
                      options={cropCultivated}
                      placeholder="Crop Cultivated"
                      name="cropCultivated"
                      value={form.cropCultivated || ""}
                      // error={errors.cropCultivated}
                      search
                  />
									<Form.Input
                      label="Cultivated Size"
                      placeholder="Cultivated Size"
                      name="cultivatedSize"
                      type="text"
                      onChange={this.handleChange}
                      value={form.cultivatedSize || ""}
                      // error={errors.cultivatedSize}
                  />
									<Form.Group widths='equal'>
									<SemanticDatepicker
									    label="Date of Birth"
										placeholder="Date of birth"
										name='dateOfBirth'
                    onChange={this.handleChange}
                    value={form.dateOfBirth || ""}
                    // error={errors.dateOfBirth}
									/>
									</Form.Group>
										<Form.Input
                      label="Email"
                      placeholder="Email"
                      name="email"
                      type="text"
                      onChange={this.handleChange}
                      value={form.email || ""}
                      // error={errors.email}
                      />
									 <Form.Field
                      id="select"
                      control={Select}
                      label="Farmer Type"
                      onChange={this.handleChange}
                      options={types}
                      placeholder="Farmer Type"
                      name="farmerType"
                      value={form.farmerType || ""}
                      // error={errors.farmerType}
                    />
                    <Form.Input
                      label="First Name"
                      placeholder="firstName"
                      name="firstName"
                      type="text"
                      onChange={this.handleChange}
                      value={form.firstName || ""}
                      // error={errors.firstName}
                      />
										<Form.Field
                      id="select"
                      control={Select}
                      label="Gender"
                      onChange={this.handleChange}
                      options={gender}
                      placeholder="gender"
                      name="gender"
                      value={form.gender || ""}
                      // error={errors.gender}
                    />
                    <Form.Input
                      label="Last Name"
                      placeholder="lastName"
                      name="lastName"
                      type="text"
                      onChange={this.handleChange}
                      value={form.lastName || ""}
                      // error={errors.lastName}
                      />
									</div>
								</Grid.Column>
								<Grid.Column floated='right' width={8}>
									<div
										id='edit-scroll'
										className='left-padding'
									>
										<Form.Input
                      label="Membership Amount"
                      placeholder="membership Amount"
                      name="membershipAmount"
                      type="text"
                      onChange={this.handleChange}
                      value={form.membershipAmount || ""}
                      // error={errors.membershipAmount}
                      />
									   <Form.Input
                      label="National Id"
                      placeholder="national Id"
                      name="nationalId"
                      type="text"
                      onChange={this.handleChange}
                      value={form.nationalId || ""}
                      // error={errors.nationalId}
                      />
									   <Form.Input
                      label="Nationality"
                      placeholder="nationality"
                      name="nationality"
                      type="text"
                      onChange={this.handleChange}
                      value={form.nationality || ""}
                      // error={errors.nationality}
                      />
									   <Form.Input
                      label="Phone Number"
                      placeholder="phone Number"
                      name="phoneNumber"
                      type="text"
                      onChange={this.handleChange}
                      value={form.phoneNumber || ""}
                      // error={errors.phoneNumber}
                      />
									   <Form.Field
                      id="select"
                      control={Select}
                      label="Status"
                      onChange={this.handleChange}
                      options={status}
                      placeholder="status"
                      name="status"
                      value={form.status || ""}
                      // error={errors.status}
                    />
                    <Form.Field
                      id="select"
                      control={Select}
                      label="Province"
                      onChange={this.handleChange}
                      options={displayProvince}
                      placeholder="Select province"
                      name="province"
                      value={form.province || ""}
                      // error={errors.province}
                  />
                  <Form.Field
                      loading={loadingDistricts}
                      id="select"
                      control={Select}
                      label="District"
                      onChange={this.handleChange}
                      options={displayDistricts}
                      placeholder="Select district"
                      name="districtByProvince"
                      value={form.districtByProvince || ""}
                      // error={errors.districtByProvince}
                  />
                  <Form.Field
                      loading={loadingSectors}
                      id="select"
                      control={Select}
                      label="Sector"
                      onChange={this.handleChange}
                      options={displaySectors}
                      placeholder="Select sector"
                      name="sectors"
                      value={form.sectors || ""}
                      // error={errors.sectors}
                  />
                  <Form.Field
                      loading={loadingCells}
                      id="select"
                      control={Select}
                      label="Cell"
                      onChange={this.handleChange}
                      options={displayCells}
                      placeholder="Select sell"
                      name="cells"
                      value={form.cells || ""}
                      // error={errors.cells}
                  />
									   <Form.Field
                      id="select"
                      control={Select}
                      label="Village"
                      onChange={this.handleChange}
                      options={displayVillage}
                      placeholder="village"
                      name="villageId"
                      value={form.villageId || ""}
                      // error={errors.villageId}
                    />
                                      
										<Button
                      loading={createFarmerLoading}
											primary
											className='btn-create-farmer'
											type='submit'
										>
											Save
										</Button>
									</div>
								</Grid.Column>
							</Grid>
						</Form>
					</Card>
				</Card.Group>
				<p id='footer-content'>Copyright &copy; MAHWI Tech Ltd</p>
			</div>
		);
	}
};

const mapStateToProps = ({
    user: { profile },
    farmer: {
        createFarmer: {
          loading: createFarmerLoading,
          message: messageFarmer,
          errors: errorsFarmer,
        }  
    },
     cooperative: { 
        listOfProvinces, 
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
        fetchCellsBySectors: {
            loading: loadingCells
        }
        },

    organization: { 
        listOfOrganization, 
        fetchOrganizations: { loading, message, errors }, 
        listOfZoneByCooperative,
        fetchZoneByCooperative: {
            loading: loadingZone
        },
        listOfSiteByZone,
        fetchSiteByZone: {
            loading: siteLoading
        },
        }}) => ({
        listOfOrganization,
        listOfZoneByCooperative,
        listOfSiteByZone,
        listOfProvinces,
        listOfDistrictsByProvinces,
        listOfSectorsByDistricts,
        listOfCellsBySectors,
        listOfVillagesByCell,
        loadingDistrictsByProvinces,
        loadingSectorsByDistricts,
        loadingCells,
        loadingZone,
        siteLoading,
        createFarmerLoading,
        messageFarmer,
        errorsFarmer
    });

export default connect(mapStateToProps, { getOrganization, 
getZoneByCooperative, getSiteByZone,  getProvinces, 
getDistrictByProvinces, getSectorsByDistricts, getCellsBySectors, 
getVillagesByCell, create })(CreateFarmerForm);
