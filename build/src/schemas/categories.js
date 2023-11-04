"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const catgoryModel = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    description: { type: String, required: true },
    noOfProducts: { type: Number, required: true, default: 0 },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const Category = mongoose_1.default.model("Category", catgoryModel);
exports.default = Category;