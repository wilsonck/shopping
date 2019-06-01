/**
 * Gets the formated string class to apply to the main element in Components
 *
 * @param {strings} provide strings to concat
 * @returns {string} Formatted Class
 */
 const getClassesToApply = (...classes) => classes.join(" ");

export {
    getClassesToApply
}