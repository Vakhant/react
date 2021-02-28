import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode.bind(this)}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.activateEditMode.bind(this)} value={this.state.status} />
                    </div>
                }
            </>
        );
    }
};

export default ProfileStatus;
