import React, { Component } from 'react';
import { Grid, Icon, Popup, Segment, Image, Form, Button, Select  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { connect } from 'react-redux';
import { getOrganization, getZoneByCooperative, getSiteByZone } from '../../../actions/organization';
import { gender } from "../../../helpers/userRegistration/gender";
import { getOne } from '../../../actions/farmer';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import { cropCultivated } from '../../../helpers/farmer/cropCultivated';
import { mapValues, mapValuesEdit } from '../../../helpers/mapValues';
import { status } from '../../../helpers/farmer/status';
import { types } from '../../../helpers/farmer/type';

import '../../../assets/css/table.scss';
import './EditFarmer.scss';

const profile = require('../../../assets/images/profile.png')

class EditFarmers extends Component {

      state = {
        form: {
            cooperative: '',
            cooperativeZone: '',
            cooperativeSite: '',
            cropCultivated: '',
            cropCultivated: '',
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
            villageId: ''
        },
        farmers : [],
        village: [],
        Organizations: [],
        zone: [],
        site: [],
        file: null,
    };

    fileInputRef = React.createRef();

      async componentDidMount() {
            const {
            match: { params: { id } },
            getOne, getOrganization,
            getZoneByCooperative, getSiteByZone
            } = this.props;
            getOne(id);
            getOrganization();
    }

    fileChange = e => {
        this.setState({ file: e.target.files[0] }, () => {
            console.log("File chosen --->", this.state.file);
        });
    };

  handleChange = (_, data) => {
    if (data.options) {
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

    getLocations = (data, key) => {
    const { getZoneByCooperative, getSiteByZone } = this.props;
    if (data.name === 'cooperative') {
      return getZoneByCooperative(key);
    }
    if (data.name === 'cooperativeZone') {
      return getSiteByZone(key);
    }
  };

 

     UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('nextProps edit ==>>>>', nextProps);
        console.log('prev state ==>>>>', nextProps);
        this.setState({
        form:{
            email: nextProps.listOneFarmer.email,
            firstName: nextProps.listOneFarmer.firstName,
            lastName: nextProps.listOneFarmer.lastName,
            membershipAmount: nextProps.listOneFarmer.membershipAmount,
            nationalId: nextProps.listOneFarmer.nationalId,
            nationality: nextProps.listOneFarmer.nationality,
            phoneNumber: nextProps.listOneFarmer.phoneNumber,
            },
            farmers: nextProps.listOneFarmer,
            village:  nextProps.listOneFarmer.village,
            zone: nextProps.listOfZoneByCooperative,
            Organizations: nextProps.listOfOrganization,
            site: nextProps.listOfSiteByZone,
            loading: nextProps.loading,
            loadingZone: nextProps.loadingZone,
            loadingSite: nextProps.siteLoading,
        });
    };

    render() {
        const { farmers, village, zone, site, Organizations, 
        loading, loadingZone, loadingSite, form } = this.state;
        let data = [];
        data.push(village);
        console.log('farmer', farmers);
        console.log('zone', zone);
        console.log('site', site);

        const displayOrganizations = Organizations.map(mapValues);
        const displayZone = zone.map(mapValues);
        const displaySite = site.map(mapValues);
        const villageIDedit = data && data.map(mapValuesEdit);
         console.log('village', villageIDedit);

        const imgSource = this.props.imgUri ? { uri: this.props.imgUri } : profile
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Farmers</>} users={<><span className="blue-color">All</span></>} >
                    <Link to='/view-farmers'> <Icon name='arrow left' />Back</Link>
                </MiniNavbar>
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <div className="edit-farmer">
                <div>
                    <p className="text-farmer-edit">Farmer Info</p>
                    <Grid columns={2} stretched>
                        <Grid.Row>
                            <Grid.Column id="edit-scroll">
                                <Segment>
                                    <Grid>
                                        <Grid.Column floated='left' width={5}>
                                        </Grid.Column>
                                        <Grid.Column floated='right' width={3}>
                                            <Image src={imgSource} size='tiny' className="image-rounded" circular />
                                        </Grid.Column>
                                    </Grid>
                                    <Form>
                                        <Form.Field>
                                            <Grid>
                                                <Grid.Column floated='right' width={3}>
                                                    <Icon
                                                        size="large"
                                                        name="edit"
                                                        content="Choose File"
                                                        className="icon-upload"
                                                        icon="file"
                                                        onClick={() => this.fileInputRef.current.click()}
                                                    />
                                                    <input
                                                        ref={this.fileInputRef}
                                                        type="file"
                                                        hidden
                                                        onChange={this.fileChange}
                                                    />
                                                </Grid.Column>
                                            </Grid>
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
                                             <Form.Group widths='equal'>
                                            <SemanticDatepicker
                                                label="Date of Birth"
                                                placeholder="Date of birth"
                                                name='dateOfBirth'
                                                onChange={this.handleChange}
                                                value={form.dateOfBirth}
                                            // error={errors.dateOfBirth}
                                            />
                                            </Form.Group>
                                            <Form.Input
                                                label="Email"
                                                placeholder="Email"
                                                name="email"
                                                type="text"
                                                onChange={this.handleChange}
                                                value={form.email}
                                                // error={errors.email}
                                            />
                                            <Button className="btn-edit" primary type='submit'>Edit</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column id="edit-scroll">
                                <Segment className="width-segment">
                                    <Form>
                                        <Form.Field>
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
                                                 <Form.Input
                                                    label="Membership Amount"
                                                    placeholder="membership Amount"
                                                    name="membershipAmount"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    value={form.membershipAmount || ""}
                                                    // error={errors.membershipAmount}
                                                 />
                                            <Form.Field>
                                                <input placeholder='Address' />
                                            </Form.Field>
                                            <Button className="btn-edit" primary type='submit'>Edit</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                                <Segment className="width-segment">
                                    <p className="text-profile">Agriculture</p>
                                    <Form>
                                        <Form.Field>
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
                                            <Form.Field>
                                            <Form.Field
                                                id="select"
                                                control={Select}
                                                label="Village"
                                                onChange={this.handleChange}
                                                options={villageIDedit}
                                                placeholder="village"
                                                name="villageId"
                                                value={form.villageId || ""}
                                                // error={errors.villageId}
                                            />
                                            </Form.Field>
                                            <Button className="btn-edit" primary type='submit'>Edit</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
                </div>
            </div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({
    farmer: { 
    listOneFarmer, 
     fetchOneFarmer: { loading, message, errors },

     },

     organization: {
     listOfZoneByCooperative,
        fetchZoneByCooperative: {
        loading: loadingZone
        },

        listOfSiteByZone,
        fetchSiteByZone: {
        loading: siteLoading
        },
     },

      organization: {
        listOfOrganization,
      },
     }) => ({
        listOneFarmer,
        listOfOrganization,
        listOfZoneByCooperative,
        listOfSiteByZone,
        loadingZone,
        siteLoading,
        loading,
        message,
        errors
 });

export default connect(mapStateToProps, { getOne, getOrganization,
 getZoneByCooperative, getSiteByZone })(EditFarmers);
