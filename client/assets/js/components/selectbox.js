"use strict";
import dom from "../dom.js";
import elements from "../elements.js";

const selectbox = (inputParent, legend, options, onSelect) => {
  const container = dom.create({
    type: "div",
    parent: inputParent,
    cssClassName: "selectionContainer",
  });

  dom.create({
    type: "span",
    parent: container,
    content: legend,
  });

  const elSelect = dom.create({
    type: "select",
    parent: container,
    content: "",
  });

  dom.create({
    type: "option",
    content: "Select Option",
    parent: elSelect,
    name:legend,
  });

  /*     const container = document.createElement('div');
    container.className = 'selectionContainer'; 
    parent.append(container); 


    const elLegend = document.createElement('span');
    elLegend.innerHTML = legend;
    container.append(elLegend);

    const elSelect = document.createElement('select');
    container.append(elSelect);

    const elOption = document.createElement('option')
    elOption.innerHTML = 'Select Option';
    elSelect.append(elOption);
    elSelect.name=legend;
*/
  container.update = (options) => {
    elSelect.innerHTML = "";
    for (let option of options) {
      dom.create({ type: "option",content: option, parent: elSelect });
   /*    const elOption = document.createElement("option");
      elOption.innerHTML = option;
      elSelect.append(elOption); */
    }
  };

  if (options) container.update(options);

  elSelect.addEventListener("change", (evt) => {
    container.value = elSelect.value;
    onSelect(evt);
  });

  return container;
};

export default selectbox;
