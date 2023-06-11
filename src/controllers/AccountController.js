import express from 'express';
import { getConnection } from '../config/connection.js';
import { insertTeacherAccount } from '../models/account.js';

export const signupGuru = async (req, res) => {
  try {
    const { nama, email, username, password, materi, tarif } = req.body;

    // Insert teacher account
    const teacherData = {
      full_name: nama,
      address: '', 
      phone_number: '', 
      expertise: materi,
      rate: tarif,
    };

    await insertTeacherAccount(teacherData);
    //console.log('error ga?')

    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send('An error occurred while saving the data');
  }
};

