// Подключил библиотеку Unirest, которая выполняет запросы
const unirest = require('unirest');
// Подключил библиотеку для парсинга (регулярные выражения)
const cheerio = require('cheerio');

// Подключим конфигурации
import {elems} from './configs';


const log = (i, count, ms) => {
    return new Promise(r=>setTimeout(()=>{
        console.log(`
            Индекс: ${i};
            Всего записей: ${count}
        `);
        r();
    }, ms),
    );
    
};

const parsePost = (url, elems) => {
    //Получаем данные
    return new Promise((resolve, reject)=>{
        unirest.get(url).then(({ body }) => {

            const $ = cheerio.load(body);
            const title = $(elems.title).text().trim();
            const text = $(elems.text).text().trim();
            const image = $(elems.image).attr('src');
            const price = parseInt($(elems.price).text());
    
    
            const post = {
                title: title,
                description: text,
                image: image,
                price: price
            }
            resolve(post);
    
        });
    })
}

function parseLinks(url, className, maxLinks = 5) {
    return new Promise(  (resolve,reject)=>{ 
        let links = [];
        unirest.get(url).end(({ body, error }) => {
            if(error) reject(error);
            const $ = cheerio.load(body);
            let domain = url.match(/\/\/(.*?)\//)[1];
            
    
            $(className).each((i, e)=>{
                if(i+1 <= maxLinks)
                    links.push('https://' + domain +  $(e).attr('href'));
            });
            resolve(links);
            
            if(!links.length) reject();
        });
    });
}
async function getPosts(links){

    let posts = [];
    let count = links.length;
    for (let i = 0; i < count; i++){
        const post = await parsePost(links[i], elems.kdvCookies).then(
            post => post,
        );
        posts.push(post);
        await log(i + 1, count, 2000);
    }

    return new Promise((resolve, reject)=>{
        

        !posts.length && reject({empty: 'empty'});

        resolve(posts);
    });
}
export {parsePost,parseLinks,getPosts}