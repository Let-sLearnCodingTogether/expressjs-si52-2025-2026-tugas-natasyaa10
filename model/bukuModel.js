import mongoose from "mongoose";

const BukuSchema = new mongoose.Schema(
  {
    bookTitle: {
      type : String,
      required : true,
      trim : true,
    },

    author: {
      type : String,
      required : true,
      trim : true,
    },

    status: {
      type : String,
      required : true,
      trim : true,
    },

    rating: {
      type : Number,
      required : true,
      trim : true,
    },

  },
  {
    timestamps : true,
  }
);

const bukuModel = new mongoose.model("Buku", BukuSchema);

export default bukuModel;