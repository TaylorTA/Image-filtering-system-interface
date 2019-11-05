import instoryP4 from './mockData/instory-p4.json';
import instoryP5 from './mockData/instory-p5.json';
import instoryP6 from './mockData/instory-p6.json';
import instoryP7 from './mockData/instory-p7.json';
import instoryP8 from './mockData/instory-p8.json';
import instoryP9 from './mockData/instory-p9.json';
import instoryP10 from './mockData/instory-p10.json';
import instoryP11 from './mockData/instory-p11.json';
import instoryP12 from './mockData/instory-p12.json';
import instoryP13 from './mockData/instory-p13.json';
import instoryP14 from './mockData/instory-p14.json';
import instoryP15 from './mockData/instory-p15.json';
import instoryP16 from './mockData/instory-p16.json';
import instoryP17 from './mockData/instory-p17.json';
import moment from 'moment';
import { DATE_FORMAT } from '../constants';

const mockData = {
  'instory-p4': instoryP4,
  'instory-p5': instoryP5,
  'instory-p6': instoryP6,
  'instory-p7': instoryP7,
  'instory-p8': instoryP8,
  'instory-p9': instoryP9,
  'instory-p10': instoryP10,
  'instory-p11': instoryP11,
  'instory-p12': instoryP12,
  'instory-p13': instoryP13,
  'instory-p14': instoryP14,
  'instory-p15': instoryP15,
  'instory-p16': instoryP16,
  'instory-p17': instoryP17
}

const algoliasearch = require('algoliasearch');
// const algoliasearch = require('algoliasearch/reactnative');
// const algoliasearch = require('algoliasearch/lite');
// import * as algoliasearch from 'algoliasearch'; // When using TypeScript

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page
var  result = null;
const client = algoliasearch('7RS548TEIN', '5ecedcfd04fa4bcf01466c970e606add');
const index = client.initIndex('trail_NAME');
// index.search('spaceship', (err, { hits } = {}) => {
//   result = hits;
// });


export const getTrail = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(mockData[id]);
    }, 1000);
  });
};


export const getRelatedTrails = (imageId,filter,time,range) => {
  return new Promise(resolve => {
    setTimeout(() => {
      index.search(imageId, (err, { hits } = {}) => {
        result = hits;
      });
      if(result){
        if(result.length!==0){
      result = result.filter(todo =>
        todo.data.trail.user !=="instory-p4")
      }
      var j=0;
      var i=0;
      var indexRangeBefore = 4;
      var indexRangeAfter = 4;
      if(range!=null){
        indexRangeBefore = parseInt(range.before,10);
        indexRangeAfter = parseInt(range.after,10);
      }

      console.log(range);
      for(j=0; j<result.length; j++){
        var indexOfHit = [];
        for(i=0; i<result[j]._highlightResult.data.trail.queries.length; i++){
          if(result[j]._highlightResult.data.trail.queries[i].q.matchLevel !== 'none'){
            indexOfHit.push(i);
          }
        }
        var indexOfResult = [];
        for(i=0;i<indexOfHit.length;i++){
          if(i>0 && indexOfHit[i]-indexRangeBefore> indexOfHit[i-1] + indexRangeAfter){
            indexOfResult.push(indexOfHit[i-1] + indexRangeAfter);
            indexOfResult.push(indexOfHit[i]-indexRangeBefore);
          } else if(i===0){
            indexOfResult.push(Math.max(0,indexOfHit[i]-indexRangeBefore));
          } 
          if(i===indexOfHit.length-1){
            indexOfResult.push(Math.min(result[j]._highlightResult.data.trail.queries.length,indexOfHit[i]+indexRangeAfter));
          }
        }
        var curr = [];
        var final = [];
        for(i=0; i+1<indexOfResult.length; i++){
          curr = result[j].data.trail.queries.slice(indexOfResult[i],indexOfResult[i+1]+1);
          final = final.concat(curr);
          i++;
        }
        result[j].data.trail.queries = final;
      }
      if(!filter.cold){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.temp !== 'cool'
            )
          }
        }
      }
      if(!filter.warm){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.temp !== 'warm'
            )
          }
        }
      }
      if(!filter.bright){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.brightness !== 'bright'
            )
          }
        }
      }
      if(!filter.dark){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.brightness !== 'dark'
            )
          }
        }
      }
      if(!filter.complex){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.comp !== 'y'
            )
          }
        }
      }
      if(!filter.simple){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.comp !== 'n'
            )
          }
        }
      }
      if(filter.hasText){
        for(j=0; j<result.length; j++){
          for(i=0; i<result[j].data.trail.queries.length; i++){
            result[j].data.trail.queries[i].images = result[j].data.trail.queries[i].images.filter(todo =>
              todo.features.text === 'yes'
            )
          }
        }
      }
      if(filter.year && time!=null){
        console.log(time);
        console.log(moment(result[2].data.trail.queries[0].timestamp).format(DATE_FORMAT).split(' '))
        for(j=0; j<result.length; j++){
            result[j].data.trail.queries = result[j].data.trail.queries.filter(todo =>
              moment(todo.timestamp).format(DATE_FORMAT).split(' ')[2] === time[2]
            )
        }
      }
      if(filter.month && time!=null){
        console.log(time);
        console.log(moment(result[2].data.trail.queries[0].timestamp).format(DATE_FORMAT).split(' '))
        for(j=0; j<result.length; j++){
            result[j].data.trail.queries = result[j].data.trail.queries.filter(todo =>
              moment(todo.timestamp).format(DATE_FORMAT).split(' ')[1] === time[1]
            )
        }
      }
      if(filter.day && time!=null){
        console.log(time);
        console.log(moment(result[2].data.trail.queries[0].timestamp).format(DATE_FORMAT).split(' '))
        for(j=0; j<result.length; j++){
            result[j].data.trail.queries = result[j].data.trail.queries.filter(todo =>
              moment(todo.timestamp).format(DATE_FORMAT).split(' ')[0] === time[0]
            )
        }
      }
    }
      return resolve(
        result
      );
    }, 1000);
  });
};


