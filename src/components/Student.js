import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
    const paperStyle={padding:'10px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)

        }).then(()=>{
            window.location.reload(true);
            console.log("Novo aluno adicionado.")
        })    
    }
  


useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1><u>Novo Aluno</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Nome do Aluno" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Cidade do Aluno" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Cadastrar
</Button>
    </form>
   
    </Paper>
    

    <Paper elevation={3} style={paperStyle}>
        <h1>Alunos</h1>
      {students.map(student=>(
        <Paper elevation={6} style={{borderRadius:8, margin:"5px",padding:"15px", textAlign:"left",}} key={student.id}>
            <Container style={{display: "flex"}}>
                <Container style={{width:"65%"}}>
                    {/* Id: {student.id}<br/> */}
                    Name: {student.name}<br/>
                    Address: {student.address}
                </Container>
                <Container style={{width:"35%"}}>
                    <Button>
                        <EditIcon style={{marginLeft:2}}/>
                    </Button>        
                    <Button  style={{color: "#ff0000"}}>
                        <DeleteIcon/>
                    </Button>                
                </Container> 
            </Container>
           
        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}