import React from "react";
// import ReactDOM from "react-dom"
export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            username: this.props.username,
            email: this.props.email,
            phone: this.props.phone
        }

        /**
         * TODO[Done]:
         * 
         * 1. Bind the class function to the react component.
         * 
         * Reference (Binding in React): https://reactjs.org/docs/handling-events.html
         */
        this.updateDetails = this.updateDetails.bind(this);

    }

    /**
     * TODO[Done]:
     * 
     * 1. Create a function that will update the state of the component with new details.
     * 
     * 2. Create a constant variable called personalDetails that will hold an array of objects that
     *   contain personal details such as name, username, email, and phone number.
     * 
     * 3. Create a constant variable called randomNum that will generate a random number between 0 and 4.
     * 
     * 4. Use this.setState() to update the state of the component with the new details.
     * 
     * 5. Use the random number to select a random object from the personalDetails array.
     * 
     * 
     * Reference (State and Lifecycle): https://reactjs.org/docs/state-and-lifecycle.html
     */
    updateDetails = () => {
        // Create a list of personal details which will be randomly selected from
        // and dipslayed in the profile. Use a set interval to update the profile
        // every 5 seconds.
        const personalDetails = [
            ////////////////////// YOUR CODE STARTS HERE //////////////////
            {
                name: "John Doe",
                username: "johndoe",
                email: "john@doe.mail",
                phone: "+12 3456 7890"
            },
            {
                name: "Jane Doe",
                username: "janedoe",
                email: "jane@doe.mail",
                phone: "+9 8765 4321 "
            },
            {
                name: "John Smith",
                username: "jhonsmith",
                email: "john@smith.mail",
                phone: "+12 3456 7890"
            },
            {
                name: "Jane Smith",
                username: "janesmith",
                email: "jane@smith.mail",
                phone: "+9 8765 4321"
            },
            {
                name: "Isaac Chow",
                username: "isaachychow",
                email: "isaachychow@gmail.com",
                phone: "+852 94168496"
            },
            ////////////////////// YOUR CODE ENDS HERE ////////////////////
        ];

        // Generate a random number between 0 and 5
        const randomNum = Math.floor(Math.random() * 5);

        // Update the state of the component with the new details
        ////////////////////// YOUR CODE STARTS HERE //////////////////
        this.setState({
            name: personalDetails[randomNum].name,
            username: personalDetails[randomNum].username,
            email: personalDetails[randomNum].email,
            phone: personalDetails[randomNum].phone
        })
        ////////////////////// YOUR CODE ENDS HERE ////////////////////
    }

    /**
     * > This function is called when a component is being created and inserted into the DOM. The
     * props and state parameters are the latest props and state values that will be used in the render
     * method. The value that this function returns will be set as the new state of the component.
     *   
     * 
     * @param { object } props This represents the new props that were passed to the component
     * @param { object } state This represents the current state of the component
     * @returns returns an object that represents the new state of the component
     */
    static getDerivedStateFromProps(props, state) { 
    //     if (props.name !== state.name) { 
    //         return { name: props.name }; 
    //     } 
    //     if (props.username !== state.username) { 
    //         return { username: props.username }; 
    //     } 
    //     if (props.email !== state.email) { 
    //         return { email: props.email }; 
    //     } 
    //     if (props.phone !== state.phone) { 
    //         return { phone: props.phone }; 
    //     return null; 
    }

    /**
     * > This function is called immediately after a component is mounted. This is a good place to
     * initiate API calls (External data), if you need to load data from a remote endpoint. 
     * 
     */
    componentDidMount() {
        console.log("Profile component mounted");
    }

    render() {
        return (
            <div className="card m-3" style={{width: '40rem'}}>
                <img src="https://cdn.pixabay.com/photo/2014/11/03/11/07/lion-515028_640.jpg" className="card-img-top" alt="Lion king of the jungle"/>
                <div className="card-body">
                    <h1>Profile</h1>
                    <h5 className="card-title">Name: {this.state.name}</h5>
                    <p className="card-text">Username: {this.state.username}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Phone: {this.state.phone}</p>
                </div>
                {/**
                 * TODO[Done]:
                 * 
                 * 1. Create a button with the bootstrap class "btn btn-primary" and the text "Update".
                 * 
                 * 2. Add an onClick event handler to the button that will call the updateDetails function.
                 * 
                 * Reference (Handling Events): https://reactjs.org/docs/handling-events.html
                 * Reference (Bootstrap Buttons): https://getbootstrap.com/docs/4.0/components/buttons/
                 * 
                 */}
                <button className="btn btn-primary" onClick={ this.updateDetails }>Update</button>
                
            </div>
        );
    }

    /**
     * > This function is called immediately before a component is destroyed. This is a good place to
     * perform any cleanup you need to do before the component is destroyed.
     * 
     */
    componentWillUnmount() {
        console.log("Profile component will unmount");
    }
}

// ReactDOM.render(
//     <Profile
//         name='John Doe'
//         username='johndoe'
//         email='john@doe.mail'
//         phone='1234567890'
//     />,
//     document.getElementById("root")
// );