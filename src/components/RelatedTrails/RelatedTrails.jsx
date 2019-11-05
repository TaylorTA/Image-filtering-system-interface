import React from 'react';
import { connect } from 'react-redux';
//import Checkbox from '@material-ui/core/Checkbox';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import styles from './RelatedTrails.module.scss';
import RelatedTrail from '../RelatedTrail/RelatedTrail';
import moment from 'moment';
import { DATE_FORMAT } from '../../constants';
//import tempFilter from '../tempFilter/tempFilter';
import {fetchRelatedTrails,changeFilterCold, changeFilterWarm, changeFilterDark,changeFilterBright,changeFilterText,changeFilterComplex,changeFilterSimple,changeFilterYear,changeFilterMonth,changeFilterDay,changeRangeBefore,changeRangeAfter} from '../../store/effects';
import RelatedTrailFollowed from '../RelatedTrailFollowed/RelatedTrailFollowed';

const RelatedTrails = ({
  showRelatedTrails,
  relatedTrails,
  filters,
  activeImage,
  activeImageTrail,
  changeFilterCold,
  changeFilterWarm,
  changeFilterBright,
  changeFilterDark,
  changeFilterText,
  changeFilterComplex,
  changeFilterSimple,
  changeFilterYear,
  changeFilterMonth,
  changeFilterDay,
  time,
  followPerson,
  onChangeSelectBefore,
  onChangeSelectAfter,
  range,
}) => {
  var hasFollow = false;
  if(relatedTrails.trails!=null){
    for(var i=0; i< relatedTrails.trails.length; i++){
      if(relatedTrails.trails[i].data.trail.user === followPerson){
        hasFollow = true;
      }
    }
  }
  if (showRelatedTrails) {
    if (relatedTrails.isFetching) {
      return (
        <div className={styles.layoutCenter}>
          <div className={styles.spinner}></div>
        </div>
      );
    } else if (relatedTrails.trails.length === 0) {
      return (
        <div className={styles.layoutCenter}>
          <div className={styles.emptyState}>
            Could not find trails with similar images
          </div>
        </div>
      );
    } else if(!hasFollow){
      var currentDay = moment(time).format(DATE_FORMAT);
      currentDay = currentDay.split(' ');
      var otherTrails = JSON.parse(JSON.stringify(relatedTrails));
      otherTrails = otherTrails.trails.filter(todo =>
        todo.data.trail.user !== followPerson
        );
      const otherTrail1 = otherTrails.slice(0,otherTrails.length/3);
      const otherTrail2 = otherTrails.slice(otherTrails.length/3,2*otherTrails.length/3);
      const otherTrail3 = otherTrails.slice(2*otherTrails.length/3);
      return (
        <div className={styles.layoutComponent}>
          <div className={styles.header}>
            Trails with similar images
          </div>
          <div className = {styles.filter}>
              Filters:&nbsp;&nbsp; 
              <div className ={styles.textBlock1}> 
                <label className="label1">
                Temperature: &nbsp;&nbsp;
                  <input type="checkbox"
                    checked={filters.cold}
                    onChange={() => changeFilterCold(activeImageTrail,filters,currentDay,range)}
                    className="check-input"
                    id = "cold"
                />Cold&nbsp;&nbsp;
              </label>
                
                <input type="checkbox"
                  checked={filters.warm}
                  onChange={() => changeFilterWarm(activeImageTrail,filters,currentDay,range)}
                  className="check-input"
                />Warm&nbsp;&nbsp;&nbsp; 
              </div>
             <div className ={styles.textBlock2}> 
              Brightness: &nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.bright}
                onChange={() => changeFilterBright(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Bright&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.dark}
                onChange={() => changeFilterDark(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Dark&nbsp;&nbsp;

              </div>

              <div className ={styles.textBlock3}> 
               Complexity:&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.complex}
                onChange={() => changeFilterComplex(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Complex&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.simple}
                onChange={() => changeFilterSimple(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Simple&nbsp;&nbsp;
              </div> 

              <div className ={styles.textBlock5}>
               Recency: &nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.year}
                onChange={() => changeFilterYear(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />A year&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.month}
                onChange={() => changeFilterMonth(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />A month&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.day}
                onChange={() => changeFilterDay(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />A day&nbsp;&nbsp;
              </div>

              <div className ={styles.textBlock4}>
              <input type="checkbox"
                checked={filters.hasText}
                onChange={() => changeFilterText(activeImageTrail,filters,time,range)}
                className="check-input"
              />Image with text
              </div>
              Trail before:&nbsp;&nbsp;
              <select defaultValue = "4"  onChange= {(e) => onChangeSelectBefore(relatedTrails,activeImageTrail,filters,time,range,e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              Trail after:&nbsp;&nbsp;
              <select defaultValue = "4"  onChange= {(e) => onChangeSelectAfter(relatedTrails,activeImageTrail,filters,time,range,e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              
          </div>
          
          <div className={styles.body1}>
            {otherTrail1.map((t, index) => 
              <RelatedTrail trail={t} key={index}></RelatedTrail>
            )}
          </div>
          <div className={styles.body1}>
            {otherTrail2.map((t, index) => 
              <RelatedTrail trail={t} key={index}></RelatedTrail>
            )}
          </div>
          <div className={styles.body1}>
            {otherTrail3.map((t, index) => 
              <RelatedTrail trail={t} key={index}></RelatedTrail>
            )}
          </div>
         
        </div>
      );
    } else {
      currentDay = moment(time).format(DATE_FORMAT);
      currentDay = currentDay.split(' ');
      const likedTrail = relatedTrails.trails.find(element => {
        return element.data.trail.user === followPerson;
        }
      );
      otherTrails = JSON.parse(JSON.stringify(relatedTrails));
      otherTrails = otherTrails.trails.filter(todo =>
        todo.data.trail.user !== followPerson
        );
      const otherTrail1 = otherTrails.slice(0,otherTrails.length/2);
      const otherTrail2 = otherTrails.slice(otherTrails.length/2);
      return (
        <div className={styles.layoutComponent}>
          <div className={styles.header}>
            Trails with similar images
          </div>
          <div className = {styles.filter}>
              Filters:&nbsp;&nbsp; 
              <div className ={styles.textBlock1}> 
                <label className="label1">
                Temperature: &nbsp;&nbsp;
                  <input type="checkbox"
                    checked={filters.cold}
                    onChange={() => changeFilterCold(activeImageTrail,filters,currentDay,range)}
                    className="check-input"
                    id = "cold"
                />Cold&nbsp;&nbsp;
              </label>
                
                <input type="checkbox"
                  checked={filters.warm}
                  onChange={() => changeFilterWarm(activeImageTrail,filters,currentDay,range)}
                  className="check-input"
                />Warm&nbsp;&nbsp;&nbsp; 
              </div>
             <div className ={styles.textBlock2}> 
              Brightness: &nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.bright}
                onChange={() => changeFilterBright(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Bright&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.dark}
                onChange={() => changeFilterDark(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Dark&nbsp;&nbsp;

              </div>

              <div className ={styles.textBlock3}> 
               Complexity:&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.complex}
                onChange={() => changeFilterComplex(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Complex&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.simple}
                onChange={() => changeFilterSimple(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />Simple&nbsp;&nbsp;
              </div> 

              <div className ={styles.textBlock5}>
               Recency: &nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.year}
                onChange={() => changeFilterYear(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />A year&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.month}
                onChange={() => changeFilterMonth(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />A month&nbsp;&nbsp;
              <input type="checkbox"
                checked={filters.day}
                onChange={() => changeFilterDay(activeImageTrail,filters,currentDay,range)}
                className="check-input"
              />A day&nbsp;&nbsp;
              </div>

              <div className ={styles.textBlock4}>
              <input type="checkbox"
                checked={filters.hasText}
                onChange={() => changeFilterText(activeImageTrail,filters,time,range)}
                className="check-input"
              />Image with text
              </div>
              Trail before:&nbsp;&nbsp;
              <select defaultValue = "4"  onChange= {(e) => onChangeSelectBefore(relatedTrails,activeImageTrail,filters,time,range,e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              Trail after:&nbsp;&nbsp;
              <select defaultValue = "4"  onChange= {(e) => onChangeSelectAfter(relatedTrails,activeImageTrail,filters,time,range,e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              
          </div>
          <div className={styles.body1}>
              <RelatedTrailFollowed trail= {likedTrail} ></RelatedTrailFollowed>
          </div>
          <div className={styles.body1}>
            {otherTrail1.map((t, index) => 
              <RelatedTrail trail={t} key={index}></RelatedTrail>
            )}
          </div>
          <div className={styles.body1}>
            {otherTrail2.map((t, index) => 
              <RelatedTrail trail={t} key={index}></RelatedTrail>
            )}
          </div>
         
        </div>
      );
    }
  } else {
    return (
      <div className={styles.layoutCenter}>
        <div className={styles.emptyState}>
          Click on an image to find similar trails
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    showRelatedTrails: state.ui.activeImageId !== null,
    relatedTrails: state.relatedTrails,
    activeImageId: state.trail.id,
    filters: state.relatedTrails.filters,
    activeImage:state.ui.activeImage,
    activeImageTrail:state.ui.activeImageTrail,
    time: state.trail.queries[0].timestamp,
    followPerson: state.relatedTrails.follow,
    range:state.relatedTrails.range
  }),
  dispatch => ({
    showColdImage: (activeImageId) => dispatch(fetchRelatedTrails(activeImageId, "cold")),
    showWarmImage: (activeImageId) => dispatch(fetchRelatedTrails(activeImageId, "warm")),
    showImage: (activeImageId) => dispatch(fetchRelatedTrails(activeImageId, null)),
    changeFilterCold: (activeImage,filters,time,range)=> dispatch(changeFilterCold(activeImage,filters,time,range)),
    changeFilterWarm: (activeImage,filters,time,range)=> dispatch(changeFilterWarm(activeImage,filters,time,range)),
    changeFilterBright: (activeImage,filters,time,range)=> dispatch(changeFilterBright(activeImage,filters,time,range)),
    changeFilterDark: (activeImage,filters,time,range)=> dispatch(changeFilterDark(activeImage,filters,time,range)),
    changeFilterText: (activeImage,filters,time,range)=> dispatch(changeFilterText(activeImage,filters,time,range)),
    changeFilterComplex: (activeImage,filters,time,range)=> dispatch(changeFilterComplex(activeImage,filters,time,range)),
    changeFilterSimple: (activeImage,filters,time,range)=> dispatch(changeFilterSimple(activeImage,filters,time,range)),
    changeFilterYear: (activeImage,filters,time,range)=> dispatch(changeFilterYear(activeImage,filters,time,range)),
    changeFilterMonth: (activeImage,filters,time,range)=> dispatch(changeFilterMonth(activeImage,filters,time,range)),
    changeFilterDay: (activeImage,filters,time,range)=> dispatch(changeFilterDay(activeImage,filters,time,range,range)),
    onChangeSelectBefore: (relatedTrails,activeImage,filters,time,range,e)=>dispatch(changeRangeBefore(relatedTrails,activeImage,filters,time,range,e)),
    onChangeSelectAfter: (relatedTrails,activeImage,filters,time,range,e)=>dispatch(changeRangeAfter(relatedTrails,activeImage,filters,time,range,e))
  })
)(RelatedTrails);