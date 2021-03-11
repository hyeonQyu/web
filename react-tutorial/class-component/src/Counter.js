import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 5,
        };
    }

    increase() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" size="large" onClick={this.increase.bind(this)}>
                    +
                </Button>
                <Box component="span" m={5}>
                    {this.state.count}
                </Box>
                <Button variant="contained" color="primary" size="large" onClick={this.decrease.bind(this)}>
                    -
                </Button>
            </div>
        );
    }
}

export default Counter;
