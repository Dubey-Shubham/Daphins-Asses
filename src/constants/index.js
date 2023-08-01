import { file, calender, cube, triangle, square, cart, message, puzzle } from '../photos';
import {  tabs, row, column, header, markdown, divider, table, processdaigram, triggerflow } from '../photos';

export const navlinks = [
  {
    name: 'file',
    imgUrl: file,
    link: '/',
  },
  {
    name: 'calender',
    imgUrl: calender,
    link: '/',
  },
  {
    name: 'cube',
    imgUrl: cube,
    link: '/',
    disabled: true,               //few are disabled kyuki ye bas dikhane k liye hain
  },
  {
    name: 'triangle',
    imgUrl: triangle,
    link: '/',
    disabled: true
  },
  {
    name: 'cart',
    imgUrl: cart,
    link: '/',
    disabled: true,
  },
  {
    name: 'message',
    imgUrl: message,
    link:'/profile',
  },
  {
    name: 'square',
    imgUrl: square,
    link: '/',
    disabled: true,
  },
];

export const rightlinks = [
  {
    name: 'Tabs',
    imgUrl: tabs
  },
  {
    name: 'Row',
    imgUrl: row
  },
  {
    name: 'Column',
    imgUrl: column               //few are disabled kyuki ye bas dikhane k liye hain
  },
  {
    name: 'Header',
    imgUrl: header
  },
  {
    name: 'Markdown',
    imgUrl: markdown
  },
  {
    name: 'Divider',
    imgUrl: divider
  },
  {
    name: 'Table',
    imgUrl: table
  },
  {
    name: 'Process Daigram',
    imgUrl: processdaigram
  },
  {
    name: 'Trigger Flow',
    imgUrl: puzzle
  },
];