function createmyElements(customCssObj){
  var eleStyle = document.createElement('style');
  eleStyle.setAttribute('is', 'custom-style');
  var cssProperties;

  for (var key in customCssObj) {
    if(cssProperties){
      cssProperties +=   key + ": " + customCssObj[key]+ ";\n";
    }else {
      cssProperties =   key + ": " + customCssObj[key]+ ";\n";
    }

  }
  eleStyle.innerHTML += "html {\n" +cssProperties+ "}";

  return eleStyle;
}

export {createmyElements};
