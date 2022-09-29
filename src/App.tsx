import React from 'react';
import { Plate } from '@udecode/plate';
import { editableProps } from './editableProps';
import { MyParagraphElement, MyValue } from './plateTypes';

const initialValue = [
  {
    type: 'p',
    children: [
      {
        text:
          'This is editable plain text with react and history plugins, just like a <textarea>!',
      },
    ],
  } as MyParagraphElement,
];

export default () => (
  <Plate
  <MyValue> 
  editableProps={editableProps} 
  initialValue={initialValue} />
);
