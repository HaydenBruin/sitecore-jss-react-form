import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { JoinContext } from './../../Layout';

class LivingSitutation extends Component {
    render() {
        return (
            <JoinContext.Consumer>
                {({ livingSituation, setLivingSituation }) => {
                    return (
                        <div className="living-situtations">
                            <Text tag="h2" className="title" field={this.props.fields.heading} />

                            <div className="grid-5">
                                {this.props.fields.types.value.map((situation, index) => {
                                    return (
                                        <Situtation key={index} active={livingSituation} id={index} title={situation.name} setLivingSituation={setLivingSituation} />
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

const Situtation = (props) => {
    return (
        <div className={props.active === props.id ? "situation active" : "situation"} onClick={() => props.setLivingSituation(props.id)}>
            <div className="content">
                <h4>{props.title}</h4>
                <div className="button">Select Plan</div>
            </div>
        </div>
    )
};

export default LivingSitutation;
