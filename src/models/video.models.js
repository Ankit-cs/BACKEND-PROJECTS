import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    videoFile: {
      type: String, // Cloudinary URL
      unique: true,
      required: true,
      trim: true,
    },
    thumbnail: {
      required: true,
      type: String,
      trim: true,
    },
    title: {
      required: true,
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    description: {
      required: true,
      type: String,
      trim: true,
      maxlength: 500, // Optional validation for max length
    },
    duration: {
      required: true,
      type: Number,
      min: 1, // Duration should be at least 1 second
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true, // Ensure every video has an owner
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
