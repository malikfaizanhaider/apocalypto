import {createmyElements} from './custom-style-genrator';


let customStyleKey = [];
let counter=1;
let eleCustom, customEleAdded;
let customEleRemoveOutside = false;

function fetchCustomProperties(customPropertyAPI) {

    let customCssObj = {};
    for (let i=0; i<customPropertyAPI.length; i++) {
    fetch(customPropertyAPI[i])
      .then((response) => {
        return response.json();
      })
      .then((customCssProperties) => {
        for (var j = 0; j < customCssProperties.length; ++j) {
          customCssObj[customCssProperties[j].customPropertyName] = customCssProperties[j].customPropertyValue;
        }
          customStyleKey[counter] = JSON.stringify(customPropertyAPI[i]);
          if(i+1 == customPropertyAPI.length){

            if (customEleAdded && customEleRemoveOutside==false){
              removeCustomStyle();
              getCustomElement(customCssObj);
              customEleRemoveOutside = false;
            }else {
              getCustomElement(customCssObj);
              customEleAdded = true;
              customEleRemoveOutside = false;
            }
          }
      });
  }
}

function getCustomElement(customCssObj) {
  eleCustom = document.createElement('custom-style');
  eleCustom.setAttribute('id', 'custom-style-generated');
  eleCustom.append(createmyElements(customCssObj));
  document.head.appendChild(eleCustom);
  return eleCustom;
}

function removeCustomStyle() {
  let eleToRemove = document.getElementById('custom-style-generated');
  if (eleToRemove) {
    eleToRemove.parentNode.removeChild(eleToRemove);
    customEleRemoveOutside = true;
  }
}

export {fetchCustomProperties, removeCustomStyle}




