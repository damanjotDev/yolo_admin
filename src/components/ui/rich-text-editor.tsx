import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RichTextEditor = ({value, setValue}:{value: string; setValue: Function}) => {
  return <ReactQuill  placeholder='Your Description' className='h-[200px] md:h-[300px]' theme="snow" value={value} onChange={(value)=> setValue(value)} />;
}