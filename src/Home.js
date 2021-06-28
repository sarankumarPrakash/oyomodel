import React, { useState } from 'react';
//import { useState } from 'react';
import './common.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Table, Modal, Button, Row, Col } from 'react-bootstrap';
//import { MenuItem } from 'react-bootstrap';
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BiCurrentLocation } from "react-icons/bi";
import { FaPlus, FaMinus } from 'react-icons/fa';



export const Home = (Props) => {
    const [counter, setCounter] = useState(1);
    const [show, setShow] = useState(false);
    const [row, setRow] = useState();
    const [masterTable,setmasterTable]=useState('');
    const [addressTable,setaddressTable]=useState('');
    let incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
console.log(addressTable)
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    if (counter >= 3) {
        incrementCounter = () => setCounter(3);
    }
    function Display(props) {
        if (props.message === 1 || props.message === 0) {
            return (<label style={{ marginLeft: '.5rem' }} >{props.message} </label>)
        }
        else {
            return (<label style={{ marginLeft: '.5rem' }} >{props.message} </label>)
        }
    }
    console.log(masterTable.Start)
    const handleEvent = (event, picker) => {
        let inputFinish = picker.endDate.format("DD/MM/YYYY");
        console.log(inputStart);
        console.log(inputFinish);
    };

    const inputStart = (event) => {
        let Start = event.startDate.format("DD/MM/YYYY");
        console.log(Start);
    }
    const inputFinish = (event) => {
        let Start = event.inputFinish.format("DD/MM/YYYY");
        console.log(Start);
    }
    const handleRemoveClick = (index) => {

    };
    const handleAddClick = (index) => {

    };
    const handleaddress = (e) => setaddressTable({
        ...addressTable,
        [e.target.name]: [e.target.value],
      });
   
    const handlevalue = (e) => setmasterTable({
        ...masterTable,
        [e.target.name]: [e.target.value],
      });
    let i = 1;

    return (
        <div className="searchContainer">
            <div className="searchContainer__tagline" >
                <div>
                    <h1 >World's Fastest Growing Hotel Chain</h1>
                </div>

                <div className="wrapper">
                    <span className="content">
                        <div className="dflex">
                            <input type="text" placeholder="Search by city, hotel, or neighborhood" autocomplete="no" required="" onChange={handleaddress} name="address" />
                            <span type="button" className="nearme"><BiCurrentLocation />Near Me</span>
                        </div>
                    </span>

                    <div type="button" aria-haspopup="true" aria-expanded="false" className="datepicker">
                        <span>
                            <DateRangePicker autoUpdateInput={false} locale={{ format: "DD/MM/YYYY" }} autoApply={true} onChange={handlevalue}>
                                <div>
                                    <span>Sun, 27 jun</span>
                                    <span>-</span>
                                    <span>Mon, 28 jun</span>
                                </div>
                            </DateRangePicker>
                        </span>
                    </div>

                    <Button variant="outline-light" className="room" onClick={handleShow}>
                        1 Room  1 guest
                    </Button>

                    <span type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >
                        Search
                    </span>
                </div>

            </div>
            <div className="continue">
                <span>Continue your search</span>

                <span id="Click" type="button"> {addressTable.address}.  {counter} Guests</span>

            </div>

            
            <Modal show={show} onHide={handleClose}>
            <Modal.Header  closeButton>
                    <Modal.Title>Room</Modal.Title>
                    <Modal.Title>Guest </Modal.Title>
                </Modal.Header>
        <Modal.Body>
                    <Table>
                        
                        <tbody>
                            <tr >
                                <td>Room</td>
                                <td>
                                    <Row>
                                        <Col><FaMinus className id="button" onClick={decrementCounter} /></Col>
                                        <Col> <Display message={counter} /></Col>
                                        <Col><FaPlus id="button " onClick={incrementCounter} /> </Col>
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



        </div>
            )
}
            Home.prototype = { };
            Home.defaultProps = { };
            export default Home;