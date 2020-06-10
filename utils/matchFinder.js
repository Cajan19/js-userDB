export function valueMatchesSearchString(value, searchString) {
    const convertedValue = value.toString().toLowerCase();
    const lowerCaseSeachString = searchString.toLowerCase();
    return convertedValue.includes(lowerCaseSeachString);

}

export function getSearchValue() {
    return prompt("Enter a search parameter").toLowerCase();

}