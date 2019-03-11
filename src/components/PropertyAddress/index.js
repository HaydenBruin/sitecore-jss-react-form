import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { JoinContext } from './../../Layout';

class PropertyAddress extends Component {
    render() {
        return (
            <JoinContext.Consumer>
                {({ livingSituation, propertyAddress, setPropertyAddress }) => {
                    if (!livingSituation) return null;

                    return (
                        <div className="property-address">
                            <Text tag="h2" className="title" field={this.props.fields.heading} />

                            <div className="address-picker">
                                <input type="text" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} placeholder="Enter your street address" />
                            </div>
                        </div>
                    )
                }}
            </JoinContext.Consumer>
        )
    }
};

export default PropertyAddress;
