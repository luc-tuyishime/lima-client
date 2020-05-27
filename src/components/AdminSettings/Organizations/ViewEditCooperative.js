import React, { Component } from 'react';
import { Grid, Form, Icon, Select, Message } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import UserSidebar from '../../common/Sidebar/Sidebar';
import { connect } from 'react-redux';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import Btn from '../../common/Button/Button';
import { getOneCooperative, updateCooperative, getProvinces, getDistrictByProvinces, 
getSectorsByDistricts, getCellsBySectors, getVillagesByCell } from '../../../actions/cooperative';

import { mapValues, mapValuesEdit } from '../../../helpers/mapValues';
import '../../../assets/css/table.scss';

class ViewEditCooperative extends Component {

     state = {
        form: {
            name: '',
            contactPersonName: '',
            contactPhone: '',
            contactEmail: '',
            contactPersonNationalId: '',
            licenseNumber: '',
            password: '',
            province: '',
            districtByProvince: '',
            sectors: '',
            cells: '',
            cooperativeVillageId: ''
        },
        cooperative: {},
        provinces: [],
        districtByProvinces: [],
        sectorsByDistricts: [],
        cellsBySectors: [],
        villagesByCell: [],
        loading: false,
        loadingDistricts: false,
        loadingSectors: false,
        loadingCell: false,
        errors: {},
        newMessage: {},
        village: {},
        id: '',
        errorUp: {},
        messagePass: '',
    }

    

    async componentDidMount() {
        const {
        match: { params: { id } },
        getOneCooperative, listOneCooperative,
        getProvinces
        } = this.props;

        getOneCooperative(id);
        getProvinces();
        this.setState({ id });
    }

     getLocations = (data, key) => {
        const {  getDistrictByProvinces, getSectorsByDistricts, 
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

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        const { errors, newMessage } = this.state;
        const newError = nextProps.errorsUpdate;
        const messages = nextProps.messageUpdate
        // const alertMessage = (nextProps.messageUpdate && toast.success(nextProps.messageUpdate))
        //   || (Object.keys(newError).length && toast.error('Please fill all the input fields'));
        const { listOneCooperative } = nextProps;
            this.setState({
                form:{
                    name: listOneCooperative.name,
                    contactPersonName: listOneCooperative.contactPersonName,
                    contactPhone: listOneCooperative.contactPhone,
                    contactEmail: listOneCooperative.contactEmail,
                    nationalId: listOneCooperative.nationalId,
                    licenseNumber: listOneCooperative.licenseNumber
                },
                cooperative: nextProps.listOneCooperative,
                village: nextProps.listOneCooperative.locationAddress,
                provinces: nextProps.listOfProvinces,
                districtByProvinces: nextProps.listOfDistrictsByProvinces,
                sectorsByDistricts: nextProps.listOfSectorsByDistricts,
                cellsBySectors: nextProps.listOfCellsBySectors,
                villagesByCell: nextProps.listOfVillagesByCell,
                loading: nextProps.loading,
                loadingDistricts: nextProps.loadingDistrictsByProvinces,
                loadingSectors: nextProps.loadingSectorsByDistricts,
                loadingCells: nextProps.loadingCells,
                errors: {...errors, ...nextProps.errorsUpdate},
                newMessage: {...newMessage, messages },
                errorUp: nextProps.errorsUpdate,
                messagePass: nextProps.messageUpdate
            });
       return this.setState;
     };

     handleSubmit = (e) => {
      e.preventDefault();
      const { id } = this.state;
       const { updateCooperative } = this.props;
      const { errors, form, newMessage } = this.state;
      const { contactPersonNationalId, password, cooperativeVillageId  } = form;
      const { ...formData } = form;
       updateCooperative(formData, id);
       this.setState({
           contactPersonNationalId: '',
           password: '',
           cooperativeVillageId: ''
       })
   };

    render() {
    const { loadingUpdate } = this.props;
    const { provinces,
    loadingDistricts, districtByProvinces, 
    sectorsByDistricts, loadingSectors, cellsBySectors, 
    loadingCells, villagesByCell, village, errors, newMessage, 
    errorUp, messagePass } = this.state;

    let data = [];
    data.push(village);

    const displayProvince = provinces.map(mapValues);
    const displayDistricts = districtByProvinces.map(mapValues);
    const displaySectors = sectorsByDistricts.map(mapValues);
    const displayCells = cellsBySectors.map(mapValues);
    const displayVillage = villagesByCell.map(mapValues);
    const villageIDedit = data && data.map(mapValuesEdit);
    
    const { cooperative, form, id } = this.state;
        return (
            <div className="bg-container">
            
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
                <Navbar />
                <MiniNavbar home="Home" settings={<>Cooperative</>} users={<><span className="blue-color">Edit Cooperative</span></>}>
                    <Link to='/organization'> <Icon name='arrow left' />Back</Link>
                </MiniNavbar>
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={12}>
                    {messagePass && messagePass === 'Record registered updated' ? 
                    <Message color="green"><p style={{ textAlign: 'center' }}>Record registered updated</p></Message>: ''}
                    {(errorUp && Object.values(errorUp).length > 0) ? (
                    <Message color='red'>
                           {Object.keys(errorUp).map((obj, i) => {
                               return (
                                   <div>{errorUp[obj]}</div>
                               )
                           })};
                    </Message>
                    ) : ''}
                        {form && Object.keys(form).length > 0 ?
                        <Form onSubmit={this.handleSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        label="Name"
                                        placeholder="Name...."
                                        name="name"
                                        onChange={this.handleChange}
                                        value={form.name}
                                    />
                                        <Form.Input
                                        label="Person Name"
                                        placeholder="Name...."
                                        name="contactPersonName"
                                        onChange={this.handleChange}
                                        value={form.contactPersonName}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                        <Form.Input
                                        label="Phone"
                                        placeholder="Phone...."
                                        name="contactPhone"
                                        onChange={this.handleChange}
                                        value={form.contactPhone}
                                    />
                                        <Form.Input
                                        label="Email"
                                        placeholder="Email...."
                                        name="contactEmail"
                                        onChange={this.handleChange}
                                        value={form.contactEmail}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                        <Form.Input
                                        label="National ID"
                                        placeholder="National ID...."
                                        name="contactPersonNationalId"
                                        onChange={this.handleChange}
                                        value={form.contactPersonNationalId || ""}
                                    />
                                    <Form.Input
                                        label="License Number"
                                        placeholder="License number...."
                                        name="licenseNumber"
                                        onChange={this.handleChange}
                                        value={form.licenseNumber}
                                    />
                                    
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                    label="Password"
                                    placeholder="password...."
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                    value={form.password || ""}
                                    />  
                                    <Form.Field
                                    id="select"
                                    control={Select}
                                    label="Village"
                                    onChange={this.handleChange}
                                    options={villageIDedit}
                                    placeholder="village"
                                    name="cooperativeVillageId"
                                    value={form.cooperativeVillageId || ""}
                                    // error={errors.villageId}
                                    />
                                    {/* <Form.Field
                                    id="select"
                                    control={Select}
                                    label="Province"
                                    onChange={this.handleChange}
                                    options={displayProvince}
                                    placeholder="Select province"
                                    name="province"
                                    value={form.province || ""}
                                    // error={errors.province}
                                    /> */}
                                </Form.Group>

                                <Form.Group widths='equal'>
                                    {/* <Form.Field
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
                                    />   */}
                                    {/* <Form.Field
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
                                    /> */}
                                </Form.Group>
                               <Form.Group widths='equal'>
                                {/* <Form.Field
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
                                    /> */}
                                
                                </Form.Group>
                                <Btn type="submit" className="btn-sign-in" primary loading={loadingUpdate}>
                                    UPDATE
                                </Btn>
                            </Form> : 
                            '' 
                            }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({
    cooperative: { 
    listOneCooperative, 
     fetchOneCooperative: { loading, message, errors },
     updateCooperative: {
        loading: loadingUpdate,
        message: messageUpdate,
        errors: errorsUpdate
     },
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
     } 
     }) => ({
        listOneCooperative,
        listOfProvinces,
        listOfDistrictsByProvinces,
        listOfSectorsByDistricts,
        listOfCellsBySectors,
        listOfVillagesByCell,
        loadingDistrictsByProvinces,
        loadingSectorsByDistricts,
        loadingUpdate,
        messageUpdate,
        errorsUpdate,
        loadingCells,
        loading,
        message,
        errors
 });

export default connect(mapStateToProps, { getOneCooperative,
 updateCooperative, getProvinces, getDistrictByProvinces, 
 getSectorsByDistricts, getCellsBySectors, getVillagesByCell })(ViewEditCooperative);

