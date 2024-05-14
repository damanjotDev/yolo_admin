import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const RichTextEditor = ({ value, setValue, error }: { value: string; setValue: Function,error?: string| null | undefined; }) => {
  return <>
    <ReactQuill placeholder='Your Description' className='h-[200px] md:h-[300px]' theme="snow" value={value} onChange={(value) => setValue(value)} />
    {error &&<span className="text-red-500 mt-12">{error}</span>}
  </>
}