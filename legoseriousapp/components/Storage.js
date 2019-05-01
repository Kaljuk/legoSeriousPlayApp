import { AsyncStorage } from 'react-native';



/**
 * @function load
 * 
 * @function save
 */
const Storage = function() {

}


/**
 * @returns {Object|Boolean} False if error|no value Otherwise the value
 */
Storage.load = function(name) {
  AsyncStorage.getItem(name)
  .then( (value) => value )
  .catch( err => {
    console.log(err);
    console.log(`Error loading item ${name}`);
    return false;
  })
}

/**
 * @returns {Boolean} True if success Otherwise false
 */
Storage.save = function(name, value) {
  return AsyncStorage.setItem(name, value)
  .then( () => true)
  .catch( err => {
    console.log(err);
    console.log(`Error saving item ${name} with value ${value}`);
    return false;
  })
}

export default Storage;