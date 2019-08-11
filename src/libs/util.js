let util = {

};
util.title = function (title) {
    title = title ? title : '疯人院 | 荔枝的博客';
    window.document.title = title;
};

export default util;