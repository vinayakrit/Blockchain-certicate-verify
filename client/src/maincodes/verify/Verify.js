/* eslint-disable */


import {Table, Button, Form } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from '../main/Main';
import del from '../del/del';
import Out from '../fetch/Fetch';
import Verify from '../verify/Verify';
import React, { Component } from 'react';
import '../../App.css';
import web3 from '../../web3';
import ipfs from '../../ipfs';
import storehash from '../../storehash';
//////

class App2 extends Component {
 
    state = {
      ipfsHash:null,
      buffer:'',
      ethAddress:'',
      blockNumber:'',
      transactionHash:'',
      gasUsed:'',
      txReceipt: ''   
    };
   

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
alert("There is error which shows file not selected ["+e.message+"]"); //Handling error  
}  
        // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
        //return the transaction hash from the ethereum contract
        //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
          
         var id= document.getElementById("textbox2").value;

         var hash = this.state.ipfsHash;
         	
         
         try{ 
         const m = storehash.methods.verifyDocument(id,hash).call().then(result =>
      {
        
        if(result)
        {
            window.alert("verified");
           
            return true; 
           
        }else
         {
          window.alert("not verified");
        };
      });
         }catch(e){  
alert("There is error which shows "+e.message); //Handling error  
}  
      }) //await ipfs.add 
      
    };
 render() {
      
      return (

        <div className="main">
        <div className="App-header">
         <div ClassName="btn-row">
            <div ClassName="ct-btn">
               
            </div>
        </div>


      <div className="ct-btn" style={{display:'flex',flexDirection:'column'}}>
<div class="btn-row">

        
<div className="ct-btn">
<button className="border-neon"><span className="bg-height"></span><span class="btn-text"></span> <Link to="/Fetch" style={{color:'White'}}> Fetch</Link></button>
</div>

<div className="ct-btn">
<button className="inner-width-neon"><span className="bg-height"></span><span class="btn-text"></span> <Link to="/Main" style={{color:'White'}}> Home</Link></button>
</div>



</div>


      </div>
      
          <header >
            <h1> Verify Using Student Document only</h1>
            
            <h5>CSE Department, RIT</h5>
            <h5></h5>
                   
          </header>
          
          <hr />

          <h3> Choose file to verify </h3>
          <Form onSubmit={this.onSubmit}>
            <input 
              type = "file"
              onChange = {this.captureFile}
            />
  <input type="text" placeholder='Enter Student Id' name="textbox2" id="textbox2" />           
    <br/>
  <br/>
    <Button 
             bsStyle="primary" 
             type="submit"> 
             Send it 
             </Button>
          </Form>

</div>
         
      
            

     </div>

    
      );
    } //render
}




export default App2;











