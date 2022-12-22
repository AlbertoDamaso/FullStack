package com.albertodamaso.studentsystem.service;

import  com.albertodamaso.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public  Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student get(Integer id);
    public void delete(Integer id);
}
