import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { JoinContext } from './../../Layout';

class PlanServices extends Component {
    render() {
        return (
            <JoinContext.Consumer>
                {({ propertyAddress, planServices, setPlanServices }) => {
                    if (!propertyAddress) return null;

                    return (
                        <div className="plan-services">
                            <Text tag="h2" className="title" field={this.props.fields.heading} />

                            <div className="grid-4">
                                {this.props.fields.services.value.map((service, index) => {
                                    return (
                                        <Service key={index} isActive={planServices.indexOf(index) !== -1} id={index} title={service.name} setPlanServices={setPlanServices} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                }}
            </JoinContext.Consumer>
        )
    }
};

const Service = (props) => {
    return (
        <div className={props.isActive ? "service active" : "service"} onClick={() => props.setPlanServices(props.id)}>
            <div className="content">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
};

export default PlanServices;
