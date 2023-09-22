import React, {Component} from  'react'

class Next extends Component {
    constructor () {
        super();
        this.state = {
            Next: 'Would you like to procede to the next step, click the button below '
        }
    }

    changePage() {
        this.setState ({
            Next: 'Thank you for agreeing with our terms of service'
        })
    }


    render() {
        return <div>
            <h1>{this.state.Next}</h1>
            <button onClick={() => this.changePage()}>Subscribe</button>
        </div>
    }
}

export default Next;