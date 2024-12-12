import React, { useRef, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { MdSecurityUpdateGood } from "react-icons/md";


import { TextField,Button, Box, Typography, ListItem,List } from '@mui/material';

function Todolist() {

  let [item,setItem]=useState(' ')
  let [items,setItems]=useState([])
  let[toggle,setToggle]=useState({show:false,id:""})
  let editRef=useRef(null);

  let updateItem=(e)=>{
   setItem(e.target.value)
  }

  let addItem=()=>{
    setItems([...items,item])
  }

  let deleteItem=(id)=>{
  let newList=items.filter((_,index)=>id !==index);
  setItems(newList);
  }
  let editItem=(id)=>{
    editRef.current.focus();
    setToggle({show:true,id})
    setItem(items[id])
    }
let newItems=()=>{
  items[toggle.id]=item;
  setItems([...items])
  setItem(" ")
  setToggle({show:false})
}
  return ( 
    
    <Box
    sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:"gray",boxSizing:"border-box",margin:0,padding:0,height:700}}>
      {/* // <div className={Style.main}> */}
    <Box
    sx={{backgroundColor:"white",height:600,width:590,display:'flex',alignItems:'center',flexDirection:'column',overflow:'auto',borderRadius:5,boxShadow:'4px 4px 2px black',marginTop:3}}>
      {/* <h2>To-Do List</h2> */}
      <Typography
      sx={{fontSize:35,fontWeight:'bold',fontFamily:'fantasy',color:'blue',wordSpacing:10,letterSpacing:5,textShadow: '2px 2px 2px black'}}>
        To-Do List
      </Typography>
    {/* <div className={Style.field}> */}
   <Box
   sx={{marginTop:3}}>
      {/* <input type="text"onChange={updateItem} value={item} placeholder='Add items' ref={editRef} /> */}
      <TextField
      placeholder='Add items'
      onChange={updateItem}
      inputRef={editRef}
      value={item}
      sx={{width:350,marginRight:3,marginLeft:4}}
      />
      {/* <button className={Style.btn}onClick={addItem}>Add</button> */}
      <Button
      onClick={addItem}
      sx={{backgroundColor:"blue",color:"white",height:55,width:70,marginRight:2}}
      >
        Add
      </Button>
      {/* {toggle.show && <button className={Style.update}><MdSecurityUpdateGood size={30}/></button>} */}
      {toggle.show && 
      <Button onClick={newItems}
        sx={{backgroundColor:"blue",height:55,color:"white",marginRight:2}}                          
                                  >
        <MdSecurityUpdateGood size={30}/>
        </Button>}
    {/* </div> */}
    </Box>
    <hr/>
  <Box
  sx={{width:400,display:"flex",justifyContent:'space-between',gap:4,flexDirection:'column'}}>
   {items.map((i,index)=>{
      return(
        <List key={index}
        sx={{height:60,backgroundColor:'aqua',borderRadius:2,boxShadow:'3px 3px gray',display:'flex',justifyContent:'space-around'}}>
          <ListItem
          sx={{display:'flex',marginLeft:2}}>{i}</ListItem>
          {/* <button className={Style.btn3} onClick={()=>{editItem(index)}}><FaRegEdit/></button> */}
          <Button
          onClick={()=>{editItem(index)}}
          sx={{'&:hover':{
            bgcolor:'blue',
            color:'white',
        
          },
          marginRight:2,
          marginLeft:2,
        }
           
          }>
          <FaRegEdit size={25}/>
          </Button>
         
          {/* <button className={Style.btn2} onClick={()=>{deleteItem(index)}}><AiFillDelete size={30} color='blue' /></button> */}
          <Button
          onClick={()=>{deleteItem(index)}}
          sx={{'&:hover':{
            bgcolor:'blue',
            color:'white'
        
          },
        marginRight:2,
        }
           
          }>
          <AiFillDelete size={30}/>
          </Button>
        
        </List>
      )
    })}
   </Box>
   </Box>
  {/* //  </div> */}
    
  
    </Box>
   
   
  )
}

export default Todolist
