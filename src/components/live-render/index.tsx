import React from 'react';
// @ts-ignore
import { connect } from "react-redux";
import {updateCodeSnippet} from '../../redux/action';

function RenderedView() {
    return (
        <div className="RenderedView"></div>
    )
}



interface InputViewState {
    input : string
}

interface InputViewProps {
    codeSnippet: string
}

class InputView extends React.Component <InputViewProps, InputViewState> {

    constructor(props: any) {
        super(props);
        this.state = {
            input: this.props.codeSnippet
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        console.log(event.target.value)
        this.setState({ 'input': event.target.value })
    }

    render() {
        return (
            <div className="InputView">
                <textarea value={this.state.input} onChange={this.handleChange} ></textarea>
            </div>
        )
    }

}

function LiveRender({codeSnippet}:InputViewProps) {
    return (
        <div className="LiveRender">
            <RenderedView />
            <InputView codeSnippet={codeSnippet} />
        </div>
    )
}

export default connect(null, {updateCodeSnippet})(LiveRender);