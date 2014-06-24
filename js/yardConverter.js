var pluralize = function(unit, value) {
  if (value > 1) return unit + 's';
  return unit;
}
  
var mileBased = function(yardsParam){
	var yards = yardsParam % (220 * 8),
		miles = Math.floor(yardsParam/(220 * 8)),
		result = '';

	var fraction;

	fraction = yards/(200 * 8);

	switch(yards){
  		case 1320:
			result = miles + ' 3/4 ' + pluralize('mile', miles);
			break;
		case 880:
			result = miles + ' 1/2 ' + pluralize('mile', miles);
			break;
		case 440:
			result = miles + ' 1/4 ' + pluralize('mile', miles);
			break;
		case 220:
			result = miles + ' 1/8 ' + pluralize('mile', miles);
			break;
		case 0:
			result = miles + ' ' + pluralize('mile', miles);
			break;
		default:
			result = miles + ' ' + pluralize('mile', miles) + ' ' + yards + ' ' + pluralize('yard', yards);
	}

	return result;		

}
  
var furlongBased = function(yardsParam){
	var yards = yardsParam % 220,
		furlongs = Math.floor(yardsParam/220),
		result = '';

	switch(yards){
    	case 165:
			result = furlongs + '.75 furlongs';
			break;
  		case 110:
			result = furlongs + '.5 furlongs';
			break;
		case 55:
			result = furlongs + '.25 furlongs';
			break;
		case 0:
			result = furlongs + ' furlongs';
			break;
		default:
			result = furlongs + ' furlongs ' + yards + ' ' + pluralize('yard', yards);
	}

	return result;
}

var Solution = function() {}

Solution.prototype = {
  format: function(distance) {
    var furlongs, miles;
  
    furlongs = distance/220;
  	miles = furlongs/8;
  
  	if (miles >= 1){
  		return mileBased(distance);
  	}else{
  		if (furlongs >= 3){
  			return furlongBased(distance);
  		}else{
  			return distance + ' ' + pluralize('yard', distance);
  		}
  	}
    //return '400 ' + pluralize('yard', 400);
  },
};

module.exports = Solution;