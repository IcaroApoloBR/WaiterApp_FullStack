import { model, Schema } from 'mongoose';

export const Category = model('Category', new Schema({
  name: {
    type: 'string',
    required: true
  },
  icon: {
    type: 'string',
    required: true
  },
}));
