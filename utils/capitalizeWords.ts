/* 
  This function is for the value that is returned from the Select component from the react select library. When ever I make an update to the field, it converts the activity.type string into an object. This will return the label, which is a string value 
*/
const convertSelectValue = (selectValue: { value: string; label: string }) => {
  return selectValue.label;
};

export const capitalizeWords = (words: string) => {
  let splitWords = typeof words === 'string' ? words.split(' ') : convertSelectValue(words).split(' ');
  const capitalizedWords = splitWords?.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords?.join(' ');
};
