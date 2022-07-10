const rp = require('request-promise');
const cheerio = require('cheerio').load('');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    //success!
    //console.log(cheerio('td > a', html).length);
    //console.log(cheerio('td > a', html));

    let wikiHrefs = [];

    for (let i = 0; i < cheerio('td > a', html).length; i++) {
      wikiHrefs.push(cheerio('td > a', html)[i].attribs.href);
    }

    console.log(wikiHrefs);
  })
  .catch(function(err){
    //handle error
    console.log(err)
  });