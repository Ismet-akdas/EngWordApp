const express = require("express")
const router =express.Router()
const db = require("../db")






exports.deleteget = async (req,res)=>{

    const sql = "SELECT * FROM new_table"

    db.query(sql, (err,ressult)=>{
        if(err){
            console.log("veritabanı hatası")
           return res.render("delete",err)
        }



        res.render("delete",
            {
            word: ressult,
            err:null}
        );
    })
    
}



exports.deletepost = async (req,res)=>{
    
    const wordid = req.params.id
    const sql = "DELETE  FROM new_table WHERE Word_ID = ?"
    
    
    db.query(sql, [wordid],(err,ressult)=>{
        if(err){
            console.log("veritabanı hatası")
            return res.status(500).send("Veritabanı hatası");
        }
        
        
        
        res.redirect("/delete");
    })
    
}

exports.editget = async (req,res)=>{
    const id= req.params.id

    const sql = "SELECT * FROM new_table WHERE Word_ID = ?"

    db.query(sql,[id], (err,ressult)=>{
        if(err){
            console.log("veritabanı hatası")
           return res.render("delete",err)
        }



        res.render("edit",
            {
            word: ressult[0],
            err:null}
        );
    })
    
}



exports.editpost = async (req,res)=>{
    
    const id = req.params.id
    const {english , turkish} = req.body
    
    const sql = "UPDATE new_table SET english = ?, turkish = ? WHERE Word_ID = ?"
    
    db.query(sql, [english,turkish,id],(err,ressult)=>{
        if(err){
            console.log("veritabanı hatası")
            return res.status(500).send("Veritabanı hatası");
        }
        
        
        
        res.redirect("/delete");
    })
}
