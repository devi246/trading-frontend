import React, {Component} from 'react';
import NavLink from 'react-bootstrap/NavLink';
import Table from 'react-bootstrap/Table';
import { Outlet, Link } from 'react-router-dom';
import { getOffers } from "../test/data";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import dodge from './../images/dodge.jpg'
import snowflake from './../images/snowflake.jpg'
import classic from './../images/classic.jpg'
import Globe from '.././Global'

class OffersIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {items: [], isLoaded: false, error: null}
        this.init = false
    }

    componentDidMount() {
        if (this.init == false) {
            this.searchServer({search: "", way: "give"})
            this.init = true
        }
    }

    handleSearch(data) {
        //console.log("INDEX: ", data)
        this.searchServer(data)
        //this.setState({items: getOffers(searchTerms)});
    }

    searchServer(data) {
        //console.log("searchServer. data: ", data)
    
        console.log("POST SERVER." ,Globe.server)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            credentials: 'include',
            body: JSON.stringify(data)
		};
        fetch(Globe.server+"/api/offers", requestOptions)
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(
            (result) => {
            
            let java = []
            if(result) {
                try {
                    java = JSON.parse(result);
                } catch(e) {
                    console.log(e);
                }
            }
            
            // remove null values from the array
            java = java.reduce(function(result, element) {
                if (element !== null) {
                result.push(element)
                }
                return result;
            }, []);
        
            this.setState({ isLoaded: true, items: java });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("OFFERS INDEX: searchServer Error", error)
                this.setState({ isLoaded: true, error: error });
            }
      )
    
    }

    render() {

        return (

            <Container>

            <br></br>

            <Row>
                <Col></Col>
                <Col>

                    <Row>
                    <Col>
                        {/* <div style={{width: "550px"}}> */}
                        <div style={{width: "550px"}}>
                            <h4>Offers</h4>
                        </div>
                    </Col>
                    </Row>

                    <br></br>

                    <Row>
                    <Col>
                        <SearchBar onSearch={this.handleSearch} />
                    </Col>
                    </Row>


                    <br></br>


                    <Row>
                    <Col>
                        <OfferTable items={this.state.items} isLoaded={this.state.isLoaded} error={this.state.error} />
                    </Col>
                    </Row>

                </Col>
                <Col></Col>
            </Row>

            </Container>

    );}

}
export default OffersIndex;











class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.clickSort = this.clickSort.bind(this);
        //this.state = { search: "", giver: "", receiver: "", buy: false, sell: false, mine: false, finished: false, max: 10}
        this.state = { search: "", giver: "", receiver: "", way: "give", max: 10, sort: "hiprice"}
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state);
        console.log('You clicked search:', this.state);
    }

    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState( { [e.target.name]: value } )
    }

    handleRadioChange(e) {
        this.setState( { way: e.target.name }, () => {
            this.props.onSearch(this.state)
        } )   
    }

    clickSort() {
        if (this.state.sort == "hiprice") this.setState({sort:"loprice"})
        else if (this.state.sort == "loprice") this.setState({sort:"hiprice"})
    }

    render() {
        //const {number, name, amount, due} = this.props;

        const sortStyle={
            marginTop: "-2px", marginBottom: "0px", paddingTop: "0px", paddingBottom: "0px",
            fontSize: "80%"
        }

        return (
            <>

            <Form className="d-flex" onSubmit={this.handleSubmit}>
                <>
                <FormControl
                type="search"
                placeholder="Offer name"
                className="me-2"
                name="search"
                onChange={ this.handleChange }
                />
                <Button variant="outline-success" type="submit">Search</Button>
                </>
            </Form>
    

            <Row style={{marginTop: "10px", marginBottom: "-10px"}}>
            <Col>

            <Form>
            
            <Form.Check
            inline
            label="View Sellers"
            name="give"
            type="radio"
            id="PChoiceGive"
            checked={this.state.way == "give" ? true : false}
            onChange={this.handleRadioChange}
            />
            <Form.Check
                inline
                label="View Buyers"
                name="receive"
                type="radio"
                id="PChoiceReceive"
                checked={this.state.way == "receive" ? true : false}
                onChange={this.handleRadioChange}
            />

            </Form>
            </Col>

            <Col style={{textAlign: "right"}}>

            {this.state.sort == "hiprice"?
            <Button variant="link" style={sortStyle} onClick={this.clickSort}>
                sort by price &uarr;</Button>
                :
            <Button variant="link" style={sortStyle} onClick={this.clickSort}>sort by price &darr;</Button>
            }
            

            </Col>
            </Row>

        </>

    );}
}



class OfferTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.error != null) {
            return ( <p>Server error. Can't find resources.</p> )
        }
        else if (!this.props.isLoaded) {
            return ( <p>Loading...</p> )
        }

        const items = this.props.items

        const tableRows = items.map((item) =>
            <TableRow key={item.Name.toString()}
                giver={item.Giver.name} name={item.Name}
                receiver={item.Receiver !== null ? item.Receiver.name : ""}
                value={item.State} due={item.State} item={item}
            />
        );

        return (

            <Table striped  hover>

            <tbody>
            
            {tableRows}

            </tbody>
            </Table>

    );}
}



class TableRow extends React.Component {
    constructor(props) {
        super(props)
        this.getImage = this.getImage.bind(this)
    }

    getImage(source) {

        if (source == "dodge") {
            return (
                <img src={dodge} alt="Car Image" style={{height: "100px"}} />
            )
        }
        else if (source == "classic") {
            return (
                <img src={classic} alt="Car Image" style={{height: "100px"}} />
            )
        }
        else {
            return (
                <img src={snowflake} alt="Content Image" style={{height: "100px"}} />
            )
        }
    }
    

    render() {
        const noBorder = {border: "0px"}

        const {giver, name, receiver, value, due, item} = this.props;

        return (
            <>
            <tr>
                <td className="col-1" style={{textAlign: ""}}>
                    { this.getImage(item.Content.Image) }
                </td>
                <td>
                    <h5 style={{marginBottom: "0px" }}>
                    {name}
                    </h5>
                    <span style={{fontSize: "80%", marginTop: "-20px", paddingTop: "-20px"}}>
                        {item.Content.Description}
                    </span>
                    
                </td>
                <td>
                    { item.Price == 0? "free":
                    item.Price + " " + item.Currency
                    }
                    <br></br>
                    <span>
                        <Link to={`/offers/${item.Id}`} key={item.Id}>View Offer</Link>
                    </span>
                </td>
            </tr>
            <tr>
                <td style={noBorder}></td>
                <td style={noBorder}></td>
                <td style={noBorder}></td>
            </tr>
            </>
    );}
}


