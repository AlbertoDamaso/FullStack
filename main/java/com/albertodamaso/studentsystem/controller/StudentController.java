package com.albertodamaso.studentsystem.controller;

import com.albertodamaso.studentsystem.model.Student;
import com.albertodamaso.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController 
@RequestMapping("/student")
@CrossOrigin 
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "Novo aluno adicionado.";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@RequestBody Student student, @PathVariable Integer id){
        Student existingStuden=studentService.get(id);
        studentService.saveStudent(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public  String delete(@PathVariable Integer id){
        studentService.delete(id);
        return "Aluno deletado com id: "+ id;
    }
}
