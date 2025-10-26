import bukuModel from "../model/bukuModel.js"
import Buku from "../model/bukuModel.js"

export const listBuku = async (req, res) => {
    try {
        const data = await bukuModel.find({})
        res.status(200).json({ 
            message: "List buku", 
            data 
        })
    } catch (error) {
        res.status(500).json({ 
            message: error.message, 
            data: null 
        })
    }
}

export const createBuku = async (req,res)=>{
    try{const request = req.body
        console.log(request)
        const response = await bukuModel.create({
            bookTitle : request.bookTitle,
            author : request.author,
            status : request.status,
            rating : request.rating
        })
        res.status(201).json({
            message: "Buku berhasil ditambahkan",
            data: response
        })

    }catch(error){
        res.status(500).json({
            error : error.message
        })
    }
}

export const updateBuku = async (req,res) => {
    try{const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                message : "Book Title Wajib Diisi",
                data: response
            })
        }
        console.log(request)
        const response = await bukuModel.findByIdAndUpdate(id, {
            bookTitle : request.bookTitle,
            author : request.author,
            status : request.status,
            rating : request.rating
        })

        if(!response){
            return res.status(500).json({
                message: "Buku Gagal Diupdate",
                data: response
            })
        }

        return res.status(200).json({
            message: "Buku Berhasil Diupdate",
        })

    }catch (error){
        res.status(500).json({
            message: error,
            data: null
        })
    }
}

export const deleteBuku = async (req,res)=>{
    try{
        const id = req.params.id
        if(!id){
            res.status(204).json({
                message: "Book Title Wajib Diisi",
                data: response
            })
        }
        const response = await bukuModel.findByIdAndDelete(id)
        if(response) {
            res.status(200).json({
                message : "Buku Berhasil Dihapus",
                data: null
            })
        }
        return res.status(404).json({
            message: "Buku Tidak Ditemukan",
            date: null
        })

    }catch (error){
        res.status(500).json({
            message : error,
            data: null
        })
    }
}