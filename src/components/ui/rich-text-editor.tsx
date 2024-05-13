import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RichTextEditor = () => {
  const [value, setValue] = useState('');
  console.log('value', value)
  return <ReactQuill placeholder='Your Description' className='absolute h-[95%] top-0 w-full' theme="snow" value={value} onChange={setValue} />;
}