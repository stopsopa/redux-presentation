
import React, { Component } from 'react';


export default class List extends Component {
    constructor(...args) {

        super(...args);

        this.state = {
            input: ''
        };
    }
    onSubmit = e => {

        e.preventDefault();

        const { onAdd } = this.props;

        if (this.state.input) {

            onAdd(this.state.input);

            this.setState({
                input: ''
            });
        }

    }
    onChange = e => this.setState({input:e.target.value})
    render() {

        const { list, onDelete, loading } = this.props;

        return (
            <div>
                <h4>List:</h4>
                <form
                    onSubmit={this.onSubmit}
                    disabled={loading}
                >
                    <input
                        type="text"
                        onChange={this.onChange}
                        value={this.state.input}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                    >add</button>
                </form>
                <ul>
                    {list.map(item =>
                        <li key={item.id}>
                            {item.name}
                            <button
                                onClick={() => onDelete(item.id)}
                                disabled={loading}
                            >remove</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
};
