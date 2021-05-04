function templateStr(tpl, attributes) {
    for (var i in attributes) {
        if (attributes.hasOwnProperty(i)) {
            tpl = tpl.replace('{{' + i + '}}', attributes[i]);
        }
    }
    return tpl;
}
