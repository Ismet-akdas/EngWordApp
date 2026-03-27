const express = require("express")
const router =express.Router()
const db = require("../db")


exports.mainget = async (req, res) => {
    res.render("main", { word: null, err: null,success: null});
};




exports.mainpost = async (req,res)=>{
    const {answer,wordId,question,start, check} = req.body

    if(start){
        db.query( "SELECT * FROM new_table ORDER BY RAND() LIMIT 1 ",(err, ressult )=>{
            if(err){
            console.log("veritabanı hatası")
           return res.render("main",{ word: null,err: 'DB HATA.',success: null })
        }
        const word = ressult[0];
        
        
        console.log("Gelen kelime:", word);
      return  res.render("main",{word,err:null,success: null})

        })
   return ; // bu önemli!
  }


  if (check) {
        // wordId ile kelimeyi veritabanından al
        db.query("SELECT * FROM new_table WHERE Word_ID = ?", [wordId], (err, results) => {
            if (err || results.length === 0) {
                return res.render("main", { word: null, err: 'Kelime bulunamadı.',success: null });
            }

            const word = results[0];

            // Cevap doğru mu?
            const isCorrect = word.turkish.trim().toLowerCase() === answer.trim().toLowerCase();

            if (isCorrect) {
                

                
                
                return res.render("main", {
                    word: null,
                    err: null, // hata değil, başka bir kelimeyle devam etmek isteyebilirsin
                    success: 'Kelime Doğru!'
                });
            } else {
                return res.render("main", {
                    word,
                    err: "Cevap yanlış! Doğru cevap: " + word.turkish,
                    success: null
                });
            }
        });

        return; // burada da fonksiyonu sonlandır
    }

    // Hiçbir butona basılmadıysa
    return res.render("main", { word: null, err: null,success:null });
};
