const express = require("express")
const router =express.Router()
const db = require("../db")



exports.addget = async (req,res)=>{
    res.render("add",
        {
            error:null,
            success:null

        });
}


exports.addpost = async (req,res)=>{
    const {english,turkish} = req.body;

    if(!english || !turkish){
      return   res.render("add",{error:"boş bırakmayın",success:null})
    }


const sql = 'INSERT INTO new_table (english, turkish) VALUES (?, ?)';

  db.query(sql, [english, turkish], (err, result) => {
    if (err) {
      console.error('Veritabanı hatası:', err);
      return res.render('add', { error: 'Veritabanı hatası', success: null });
    }

    res.render('add', { error: null, success: 'Kelime başarıyla eklendi!' });
  });

}    
