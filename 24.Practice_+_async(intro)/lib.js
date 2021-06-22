
function serialzeModule() {
    const checkAllowElementForm = (item) => {
    return item.tagName.toLowerCase() != 'button' && item.type != 'button';
}

function serializeForm(form) {
    const payload = {};
    
    for(let i = 0; i < form.length; i++){
        if (checkAllowElementForm(form[i])) {
            payload[form[i].id] = form[i].value
        }
    }
    
    return JSON.stringify(payload);
}


return {
    serializeForm
}
}


const { serializeForm } = serialzeModule();