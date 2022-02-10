
// Подключил parse post js
import {parsePost, parseLinks, getPosts} from './parsePost';
import fs from 'fs';
const saveResult = json => {
    fs.writeFile('result.json', json, err => {
        if(err) console.log('Not saved');
    });
};


const urlPage = 'https://kdvonline.ru/catalog/pechenye-3';

parseLinks(urlPage, '.c3s8K6a5X .cKV5--oM0 a').then(links => {
    getPosts(links).then(posts=>saveResult(JSON.stringify(posts, 0, 4)))
    .catch(e=>console.log(e));
}).catch(e=>console.log(e));














// parsePost('https://kdvonline.ru/product/baggetsy-22755', elems.kdvCookies);