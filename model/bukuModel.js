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

const BukuModel = mongoose.model("Buku", BukuSchema);

export default BukuModel;