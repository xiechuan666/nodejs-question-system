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
      dropdown: ['upload', 'base64'],
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