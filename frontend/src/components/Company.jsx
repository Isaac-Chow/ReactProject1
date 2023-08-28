import React from 'react';
// import ReactDOM from "react-dom"
class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: this.props.companyName,
            catchPhrase: this.props.catchPhrase,
            motto: this.props.motto
        }

        /**
         * FIXME:TODO:
         * 
         * 1. Bind the class function to the react component.
         * 
         * Reference (Binding in React): https://reactjs.org/docs/handling-events.html
         */
        ////////////////////// YOUR CODE STARTS HERE ///////////////////
        
        

        ////////////////////// YOUR CODE ENDS HERE /////////////////////
    }

    static getDerivedStateFromProps(props, state) {
        if (props.companyName !== state.companyName) {
            return { companyName: props.companyName };
        }
        /**
         * FIXME:TODO:
         * 
         * 1. Add more if statements to check for changes in the catchPhrase and motto properties. Check
         * whether the props and state values are different. If they are, return an object with the
         * updated values.
         * 
         * Reference (React getDerivedStateFromProps): https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
         * 
         */
        ////////////////////// YOUR CODE STARTS HERE ///////////////////

        

        ////////////////////// YOUR CODE ENDS HERE /////////////////////
        return null;
    }

    /**
     * TODO[Done]:
     * 
     * 1. Create a function called updateCompany that will update the state of the component with new company details.
     * 
     * 2. Create a constant variable called companies that will hold an array of objects that
     *  contain company details such as companyName, catchPhrase, and motto.
     * 
     * 3. Create a constant variable called randomNum that will generate a random number between 0 and 4.
     * 
     * 4. Use this.setState() to update the state of the component with the new details.
     * 
     * 5. Use the random number to select a random object from the companies array.
     * 
     * Reference (State and Lifecycle): https://reactjs.org/docs/state-and-lifecycle.html
     */
    updateCompany = () => {
        // Create a list of companies which will be randomly selected from
        // and dipslayed in the profile. Use a set interval to update the company
        // every 5 seconds.
        const companies = [
            // Key:value
            ////////////////////// YOUR CODE STARTS HERE ///////////////////
            /**
             * Vestibulum risus felis, porttitor quis commodo quis, mattis sit amet sem. 
             * Donec fringilla mauris vitae hendrerit facilisis. Morbi finibus posuere nibh 
             * sit amet ullamcorper. Ut commodo purus ut pretium eleifend. Suspendisse maximus nisi libero, in efficitur purus facilisis et. Nunc non dapibus risus.
             */
            {
                companyName: "!qwerty123 company",
                catchPhrase: "Hey!",
                motto: "Sell stuff!",
            },
            {
                companyName: "Turtlers Coding",
                catchPhrase: "Just make it up Isaac",
                motto: "Teach coding",
            },
            {
                companyName: "Isaac's company",
                catchPhrase: "Hi! :D",
                motto: "Have fun",
            },
            {
                companyName: "very good company",
                catchPhrase: "Donec fringilla mauris vitae hendrerit facilisis. Morbi finibus posuere nibh.",
                motto: "Buy stuff!",
            },
            {
                companyName: "WAAAAAAAAAAAAA",
                catchPhrase: "Vestibulum risus felis, porttitor quis commodo quis, mattis sit amet sem.",
                motto: "Buy stuff!",
            },
            ////////////////////// YOUR CODE ENDS HERE /////////////////////
        ];

        // Get a random number between 0 and 4
        const randomNum = Math.floor(Math.random() * 5);

        // Update the state with a randomly selected company
        ////////////////////// YOUR CODE STARTS HERE ///////////////////
        this.setState({
            companyName: companies[randomNum].companyName,
            catchPhrase: companies[randomNum].catchPhrase,
            motto: companies[randomNum].motto
        })
        ////////////////////// YOUR CODE ENDS HERE /////////////////////
    }


    render() {
        
        return (
            <div className="card w-50">
                <div className="card-header">
                    Company 
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p><strong>Name:</strong> {this.state.companyName}</p>
                        <p><strong>Catch Phrase:</strong> {this.state.catchPhrase}</p>
                        <p><strong>Motto:</strong> {this.state.motto}</p>
                    </blockquote>
                </div>
                {/**
                 * TODO[Done]:
                 * 
                 * 1. Create a button and assign it a bootstrap class of "btn btn-primary"
                 * 2. Add an onClick event handler to the button that calls the updateCompany method
                 * 
                 * Reference (Bootstrap Buttons): https://getbootstrap.com/docs/4.0/components/buttons/
                 * Reference (React onClick Event Handler): https://reactjs.org/docs/handling-events.html
                 *   
                 */}
                {/*////////////////////// YOUR CODE STARTS HERE //////////////////*/}
                <button className="btn btn-primary" onClick={ this.updateCompany }>Update</button>
                {/*////////////////////// YOUR CODE ENDS HERE ////////////////////*/}
            </div>
        );
    }
}

// ReactDOM.render(
//     <Company
//         companyName="ABC Company"
//         catchPhrase="Catch Phrase"
//         motto="For all your needs"
//         />,
//     document.getElementById("root")
// )

export default Company;