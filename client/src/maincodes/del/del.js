/* eslint-disable */
//please ignore below code, delete function used to delete certificate from student, below code is nothing but a testing code

import {Table, Button, Form } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css';
import web3 from '../../web3';
import ipfs from '../../ipfs';


class App4 extends Component {
 
    state = {
      ipfsHash:null,
      buffer:'',
         
    };
   ///



   //////



    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };

    convertToBuffer = async(reader) => {
      //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };

    

    onSubmit = async (event) => {
      event.preventDefault();

      //bring in user's metamask account address
    

      //save document to IPFS,return its hash#, and set hash# to state
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);
        //setState by setting ipfsHash to ipfsHash[0].hash

 

        try{
        this.setState({ ipfsHash:ipfsHash[0].hash });
}catch(e){  
alert("Please Select file ["+e.message+"]"); //Handling error  
}  
        // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
        //return the transaction hash from the ethereum contract
        //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
       

      }) //await ipfs.add 
      
    };
 render() {
      
      return (
////

 



        /////

        <div className="App4">
        <div className="App-header">
         <div ClassName="btn-row">
         
            <div ClassName="ct-btn">
               
            </div>
        </div>


      <div className="ct-btn" style={{display:'flex',flexDirection:'column'}}>


             

          <header>

            <h1> Educational Documents Authorization</h1>
            
            <h5>CSE Department, RIT</h5>
            <h5></h5>
                   
          </header>
          </div>
          <hr />

          <h3> Choose file to upload </h3>
          <Form onSubmit={this.onSubmit}>
            <input 
              type = "file"
              onChange = {this.captureFile}
            />
  <input type="text" placeholder='Enter student Id' name="textbox2" id="textbox2" />            
  <br/>
  <br/>
   <Button 
             bsStyle="primary" 
             type="submit"> 
             Submit
             </Button>
          </Form>
     </div>

          <hr/>
            <Button onClick = {this.onClick}> Get Transaction Receipt </Button>

              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>Tx Receipt Category</th>
                    <th>Values</th>
                  </tr>
                </thead>
               
                <tbody>
                  <tr>
                    <td>IPFS Hash # stored on Eth Contract</td>
                    <td>{this.state.ipfsHash}</td>
                  </tr>
                                 
                </tbody>
            </Table>
    
  


    </div>
      );
    } //render
}




export default App4;









