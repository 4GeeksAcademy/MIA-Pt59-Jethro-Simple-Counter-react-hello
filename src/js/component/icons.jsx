/* global FontAwesomeConfig */
/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';
import faclock  from '@fortawesome/fontawesome-free-regular/faClock';

/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
*/
fontawesome.config = {
  autoReplaceSvg: 'nest'
};

/**
 * 4) Add the icons into the font-awesome library
*/
fontawesome.library.add(faclock);


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i className="fas fa-check"></i>
*/