// import React from 'react';
// import { Plate } from '@udecode/plate';
// import { editableProps } from './editableProps';
// import { MyParagraphElement, MyH1Element,MyValue } from './plateTypes';

// const initialValue = [
//   {
//     type: 'h1',
//     children: [
//       {
//         text:
//           'This is editable plain text with react and history plugins, just like a <textarea>!',
//       },
//     ],
//   } as MyH1Element,
// ];

// export default () => (
//   <Plate
//   <MyValue> 
//   editableProps={editableProps} 
//   initialValue={initialValue} />
// );

//------------- Handlers ---------------

// import React, { useState } from 'react';
// import { Plate } from '@udecode/plate';
// import { plainTextValue } from './plainTextValue';
// import { editableProps } from './editableProps';
// import { MyValue } from './plateTypes';

// export default () => {
//   const [debugValue, setDebugValue] = useState<MyValue | null>(null);

//   return (
//     <Plate<MyValue>
//       editableProps={editableProps}
//       // initialValue={plainTextValue}
//       onChange={(newValue) => {
//         setDebugValue(newValue);
//         // save newValue...
//       }}
//     >
//       value: {JSON.stringify(debugValue)} 
//     </Plate>
//   );
// };

//---------------plugins-----------------------

// import React from 'react';
// import {
//   createBlockquotePlugin,
//   createBoldPlugin,
//   createCodeBlockPlugin,
//   createCodePlugin,
//   createHeadingPlugin,
//   createItalicPlugin,
//   createParagraphPlugin,
//   createStrikethroughPlugin,
//   createUnderlinePlugin,
//   Plate,
// } from '@udecode/plate';
// import { basicElementsValue } from './basicElementsValue';
// import { basicMarksValue } from './basicMarksValue';
// import { editableProps } from './editableProps';
// import { MyPlatePlugin, MyValue } from './plateTypes';
// import {
//   ELEMENT_BLOCKQUOTE,
//   ELEMENT_CODE_BLOCK,
//   ELEMENT_CODE_LINE,
//   ELEMENT_H1,
//   ELEMENT_H2,
//   ELEMENT_H3,
//   ELEMENT_H4,
//   ELEMENT_H5,
//   ELEMENT_H6,
//   ELEMENT_LI,
//   ELEMENT_LIC,
//   ELEMENT_LINK,
//   ELEMENT_OL,
//   ELEMENT_PARAGRAPH,
//   ELEMENT_TABLE,
//   ELEMENT_TD,
//   ELEMENT_TH,
//   ELEMENT_TODO_LI,
//   ELEMENT_TR,
//   ELEMENT_UL,
//   MARK_BOLD,
//   MARK_CODE,
//   MARK_HIGHLIGHT,
//   MARK_ITALIC,
//   MARK_KBD,
//   MARK_STRIKETHROUGH,
//   MARK_SUBSCRIPT,
//   MARK_SUPERSCRIPT,
//   MARK_UNDERLINE,
// } from '@udecode/plate'

// const plugins: MyPlatePlugin[] = [ 
//   createParagraphPlugin({key: ELEMENT_PARAGRAPH,}),
//   createBlockquotePlugin(),
//   createCodeBlockPlugin(),
//   createHeadingPlugin(),

//   createBoldPlugin(),
//   createItalicPlugin(),
//   createUnderlinePlugin(),
//   createStrikethroughPlugin(),
//   createCodePlugin(),
// ];

// export default () => (
//   <Plate<MyValue>
//     editableProps={editableProps}
//     initialValue={[...basicElementsValue, ...basicMarksValue, ]}
//     plugins={plugins}
//   />
// );

//..............with Styles...............

import React from 'react';
import {
  createBlockquotePlugin,
  createBoldPlugin,
  createCodePlugin,
  createHeadingPlugin,
  createItalicPlugin,
  createParagraphPlugin,
  createPlugins,
  createStrikethroughPlugin,
  createUnderlinePlugin,
  Plate,
} from '@udecode/plate';
import { basicElementsValue } from './basicElementsValue';
import { basicMarksValue } from './basicMarksValue';
import { editableProps } from './editableProps';
import { plateUI } from './plateUI';
import { MyValue } from './plateTypes';

// try to remove a few plugins!
const plugins = createPlugins<MyValue>(
  [
    createParagraphPlugin(),
    createBlockquotePlugin(),
    // createCodeBlockPlugin({
    //   // You can either pass a component per plugin
    //   component: CodeBlockElement,
    // }),
    createHeadingPlugin(),

    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
  ],
  {
    // Or pass all components at once
    components: plateUI,
  }
);

export default () => (
  <Plate<MyValue>
    editableProps={editableProps}
    initialValue={[...basicElementsValue, ...basicMarksValue]}
    plugins={plugins}
  />
);



//-------------typescript---------


// import React, { useState } from 'react';
// import { Plate } from '@udecode/plate';
// import { MyEditor, MyValue } from './plateTypes';

// export default () => {
//   // eslint-disable-next-line @typescript-eslint/no-use-before-define
//   const [value, setValue] = useState(initialValue);

//   return (
//     // Because of the TypeScript-awareness you'll also get an error if you
//     // initialize the editor with an invalid value or other invalid props.
//     <Plate<MyValue, MyEditor> value={value} onChange={(v) => setValue(v)} />
//   );
// };

// // Slate is TypeScript-aware, so if you try to use any unrecognizes `type`
// // properties in this initial value you will get a compiler error.
// const initialValue: MyValue = [
//   {
//     type: 'p',
//     children: [
//       {
//         text: 'All the Slate examples are written in TypeScript. However, ',
//       },
//       { text: 'most', italic: true },
//       { text: ' of them use ' },
//       { text: 'implicit', bold: true },
//       {
//         text:
//           " typings in many places because it makes it easier to see the actual Slate-specific code—especially for people who don't know TypeScript.",
//       },
//     ],
//   },
//   {
//     type: 'p',
//     children: [
//       { text: 'This example is written with ' },
//       { text: 'explicit', bold: true },
//       {
//         text:
//           ' typings in all places, so you can see what a more realistic TypeScript usage would look like.',
//       },
//     ],
//   },
//   {
//     type: 'h1',
//     children: [{ text: 'Quotes' }],
//   },
//   {
//     type: 'p',
//     children: [{ text: "We'll throw in a few things like quotes…" }],
//   },
//   {
//     type: 'blockquote',
//     children: [{ text: 'A wise quote.' }],
//   },
//   {
//     type: 'h1',
//     children: [{ text: 'Images' }],
//   },
//   {
//     type: 'p',
//     children: [{ text: 'And images…' }],
//   },
//   {
//     type: 'img',
//     url: 'https://source.unsplash.com/kFrdX5IeQzI',
//     children: [{ text: '' }],
//   },
// ];

