const express = require('express');
const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if (extName && mimeType) {
            cb(null, true);
        } else {
            cb(new Error('Only images (jpeg, jpg, png) are allowed!'));
        }
    },
});

router.post('/submit', upload.single('image'), async (req, res) => {
    const { name, price, quantity, owner, contact, email } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const newProduct = new Product({
            name,
            price,
            quantity,
            owner,
            contact,
            email,
            image,
        });

        await newProduct.save();

        res.status(201).json({
            message: 'Product submitted successfully',
            product: newProduct,
        });
    } catch (error) {
        console.error('Error submitting product:', error);
        res.status(500).json({
            error: 'Error submitting product',
            details: error.message,
        });
    }
});

module.exports = router;
