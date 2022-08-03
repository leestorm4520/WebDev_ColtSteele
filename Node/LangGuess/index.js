import {createRequire} from 'module';
const require=createRequire(import.meta.url);

import {franc} from 'franc';
var langs = require('langs');
var colors=require('colors');

const input=process.argv[2];
const langCode=franc(input);
if(langCode=='und') console.log("Sorry! Couldn't figure it out!");
else{
    const language=langs.where("3", langCode);
    console.log(language.name.rainbow);
}


