const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  status: {type: String, default: 'pending', enum: ['accepted', 'pending', 'rejected']}
}, { timestamps: true });

const commentSchema = new mongoose.Schema({
  content: {type: String},
  rating: {type: Number, enum: ['1', '2', '3', '4', '5']},
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}
});

const bathroomSchema = new mongoose.Schema({
  name: {type: String},
  address: {type: String, required: true},
  image: {type: String, required: true },
  description: {type: String, required: true, maxLength: 500},
  toilet: {type: Boolean},
  shower: {type: Boolean},
  bidet: {type: Boolean},
  sanitaryProducts: {type: Boolean},
  babyChanging: {type: Boolean},
  location: {
    lat: {type: Number},
    lng: {type: Number}
  },
  requests: [requestSchema],
  comments: [commentSchema],
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  isAvailable: {type: Boolean, default: true},
  previousUsers: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

bathroomSchema
  .virtual('avgRating')
  .get(function getAvgRating(){
    if(this.comments.length === 0) return 'N/A';
    const ratings = this.comments.map(comment => comment.rating);
    return Math.round(((ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length) * 2) / 2);
  });

bathroomSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Bathroom', bathroomSchema);
