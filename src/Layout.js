import React, { Component } from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.scss';

export const JoinContext = React.createContext({
    livingSituation: null,
    setLivingSituation: () => { },
    propertyAddress: null,
    setPropertyAddress: () => { }
});


class Layout extends Component {
    constructor(props) {
        super(props);

        this.route = this.props.route;
    }

    // SET FUNCTIONS
    setLivingSituation = (id) => {
        this.setState({ livingSituation: id });
    }
    setPropertyAddress = (address) => {
        this.setState({ propertyAddress: address });
    }
    setPlanServices = (service) => {
        const currentServices = this.state.planServices;
        const selectedService = currentServices.indexOf(service) !== -1;

        if (selectedService) {
            const newServices = currentServices.filter((value) => {
                return value !== service;
            });
            this.setState({
                planServices: newServices
            })
        }
        else {
            this.setState({
                planServices: [...currentServices, service]
            })
        }
    }

    // DEFAULT STATE
    state = {
        livingSituation: null,
        setLivingSituation: this.setLivingSituation,
        propertyAddress: '',
        setPropertyAddress: this.setPropertyAddress,
        planServices: [],
        setPlanServices: this.setPlanServices
    }

    // DEFAULT LAYOUT WITH APP CONTEXT
    render() {
        return (
            <JoinContext.Provider value={this.state}>
                <Helmet>
                    <title>
                        {(this.route.fields && this.route.fields.pageTitle && this.route.fields.pageTitle.value) || 'Page'}
                    </title>
                </Helmet>

                <VisitorIdentification />

                <div className="container">
                    <Placeholder name="jss-main" rendering={this.route} />
                </div>

            </JoinContext.Provider>
        );
    }
};

export default Layout;
