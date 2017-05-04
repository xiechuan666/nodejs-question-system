// $('#textEdit').trumbowyg({
//   btnsDef: {  
//     image: {  
//       dropdown: [ 'insertImage', 'base64','upload' ],  // 'upload' 还有上传图片  
//       ico: 'insertImage'  
//     }  
//   },  
// });
$.trumbowyg.btnsGrps.test = ['bold', 'link'];
$('#textEdit').trumbowyg({
  lang: 'zh_cn',
  closable: true,
  fixedBtnPane: true,
  btnsDef: {
    // Customizables dropdowns
    align: {
      dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
      ico: 'justifyLeft'
    },
    image: {
      dropdown: ['insertImage', 'upload', 'base64'],
      ico: 'insertImage'
    }
  },
  btns: ['viewHTML',
    '|', 'formatting',
    '|', 'btnGrp-test',
    '|', 'align',
    // '|', 'btnGrp-lists',
    '|', 'image']
});