import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            status: false
        }
    }

    componentDidMount() {
        // fetch API
        this.setState({
            dataList: localStorage.employee ? JSON.parse(localStorage.employee) : []
        })
    }

    deleteLastRow = () => {
        try {
            // POST API
            let newDataList = this.state.dataList
            newDataList.pop()

            localStorage.employee = JSON.stringify(newDataList)

            this.setState({
                dataList: newDataList,
                status: true
            })

            console.log(this.state.status)
        } catch (error) {
            alert("Error!!")
        }
    }

    checkStatus = () => {
        console.info(this.state.status);
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.deleteLastRow}>Delete</button>
                    <button onClick={this.checkStatus}>Status</button>
                </div>
                <table style={{ width: "100%" }} cellPadding="10px" border="1">
                    <thead>
                        <tr>
                            <th style={{ width: "50px" }}>No</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataList.length ?
                                this.state.dataList.map((val, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{val.username}</td>
                                        </tr>
                                    )
                                }) : null
                        }
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Home;