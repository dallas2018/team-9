import React, {Component} from 'react';
import firebase, {auth, provider} from "./firebase";
import './App.css';
import { Redirect } from 'react-router';

class BuySellPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: '',
            priceItem: '',
            username: '',
            items: [],
            backRedirect:false,
            redirect: false,
            user: null // <-- add this line
        }
        this.login = this.login.bind(this); // <-- add this line
        this.logout = this.logout.bind(this); // <-- add this line

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }



    handleRedirect = () => {

        this.setState({redirect : true});
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem,
            user: this.state.user.displayName || this.state.user.email,
            price: this.state.priceItem
        }
        console.log(this.state.priceItem);




       itemsRef.push(item);
    /*    this.setState({
            currentItem: '',
            username: ''

        });*/
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });


        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    user: items[item].user,
                    price: items[item].price
                });
            }
            this.setState({
                items: newState
            });
        });
    }
    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }

    backRedir = () => {

        this.setState({backRedirect : true});
    }
    render() {
        if(this.state.backRedirect){
            return <Redirect push to="/page2"/>
        }

        if(this.state.redirect){
            return <Redirect push to="/pageFive"/>
        }
        return (
            <div className='app'>
                <header>
                    <div className="wrapper">
                        <h1>Team 9 - {this.props.location.state.status}</h1>
                        <button onClick={() => {this.backRedir();}}>Buy & Sell </button>
                        {this.state.user ?
                            <button onClick={this.logout}>Logout</button>
                            :
                            <button onClick={this.login}>Log In</button>
                        }

                    </div>
                </header>
                {this.state.user ?
                    <div>
                        <div className='user-profile'>
                            <img src={this.state.user.photoURL} />
                        </div>
                        <div className='container'>
                            <section className='add-item'>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
                                    <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />

                                    <input type="text" name="priceItem" placeholder="Price" onChange={this.handleChange} value={this.state.priceItem} />



                                    <button>Add Item</button>
                                </form>
                            </section>

                            <section className='display-item'>
                                <div className="wrapper">
                                    <ul>
                                        {this.state.items.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <h3>{item.title}</h3>
                                                    <p>Sold By: {item.user}
                                                        { (item.user === this.state.user.displayName || item.user === this.state.user.email) && (this.props.location.state.status === "Sell") ?
                                                            <button onClick={() => this.removeItem(item.id)}>Remove Item</button> : null}
                                                    </p>
                                                    
                                                        { (item.user === this.state.user.displayName || item.user === this.state.user.email) && (this.props.location.state.status === "Buy") ?
                                                        <button onClick={() => this.handleRedirect()}>Buy Item</button> : null}
                                                    <p> Price: {item.price}
                                                    {console.log(item)}
                                                    </p>

                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </section>
                        </div>

                    </div>

                    :
                    <div className='wrapper'>
                        <p>You must be logged in to sell or buy items for charity.</p>
                    </div>
                }
            </div>
        );
    }


}


export default BuySellPanel;