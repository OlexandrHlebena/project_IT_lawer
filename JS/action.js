var currentlanguage = 'ua'
function changelang(){
if (currentlanguage == 'ua'){
document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-en);}</style>');
currentlanguage = 'en'
} else {
document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-ua);}</style>');
currentlanguage = 'ua'
}
}





