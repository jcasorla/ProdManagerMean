const mongoose = require('mongoose');
const Product = mongoose.model('Product')
module.exports = {
    all: async (req, res) => {
        try {
            const products = await Product.find();
            res.json({products: products});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        Product.findById({ _id : req.params.id })
            .then((data) => {
                res.json({product: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const product = new Product(req.body);
        product.save()
            .then((data) => {
                res.json({newProduct: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors )});
    },
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id , req.body, {runValidators: true, new: true} )
            .then((data) => {
                res.json({updatedProduct: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
                res.status(422).json(errors )});
    },
	
    delete: (req, res) => {
        Product.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },

    
	// createComment: function(req,res){
    //     Comment.create(req.body, function(err, data){
    //         if (err){
    //             const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
    //             res.status(422).json(errors );
    //         }
    //         else{//note it may remove the $push. be sure to add it before : {comment: data}}
    //             Cake.findOneAndUpdate({_id:req.params.id}, {$push : {comment: data}}, {runValidators: true, new: true}, function(err, data){
    //                 if (err){
    //                     const errors = Object.keys(err.errors).map(key => err.errors[key].message) 
    //                     res.status(422).json(errors );
    //                 }
    //                 else{
    //                    res.json(data)
    //                 }
    //             })
               
                
    //         }
    //     })
    // }
	
}
