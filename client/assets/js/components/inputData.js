"use strict";
import dom from "../dom.js";
import elements from "../elements.js";

function createInputField(
  inputParent,
  labelText,
  forId,
  inputType,
  placeholder
) {
  const container = dom.create({
    type: "div",
    parent: inputParent,
    cssClassName: "selectionContainer",
  });

  dom.create({
    type: "label",
    parent: container,
    content: labelText,
    attr: {
      for: forId,
    },
  });

  dom.create({
    type: "input",
    parent: container,
    name: forId,
    attr: {
      id: forId,
      type: inputType,
      placeholder: placeholder,
    },
  });
  /* 
    const container = document.createElement("div");
    container.className = 'selectionContainer'; 
    parent.append(container);
 
    // Create label element
    const label = document.createElement("label");
    label.setAttribute("for", forId);
    label.textContent = labelText;

    // Create input element
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", forId);
    input.setAttribute("placeholder", placeholder);
    input.name=forId;
    // Append elements to a container
    container.appendChild(label);
    container.appendChild(input); */
}

export default createInputField;
