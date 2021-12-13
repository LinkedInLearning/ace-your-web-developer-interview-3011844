const swatchData = [
  {
    hex: "#fde2e4",
    rgb: "rgb(253, 226, 228)",
  },
  {
    hex: "#e2ece9",
    rgb: "rgb(226, 236, 233)",
  },
  {
    hex: "#bee1e6",
    rgb: "rgb(190, 225, 230)",
  },
  {
    hex: "#cddafd",
    rgb: "rgb(205, 218, 253)",
  },
];

function constructSwatches(swatchData) {
  const swatchContainer = document.querySelector("#swatch-container");

  swatchData.forEach((swatch) => {
    swatchContainer.appendChild(generateSwatch(swatch));
  });
}

function generateSwatch(swatch) {
  const swatchWrapper = document.createElement("div");
  swatchWrapper.className = "swatch-wrapper";

  const colorWrapper = document.createElement("div");
  colorWrapper.className = "color-wrapper";
  colorWrapper.style.background = swatch.hex;

  const metadataWrapper = document.createElement("div");
  metadataWrapper.className = "metadata-wrapper";

  const hexParagraph = document.createElement("p");
  hexParagraph.innerText = swatch.hex;

  const rgbParagraph = document.createElement("p");
  rgbParagraph.innerText = swatch.rgb;

  metadataWrapper.appendChild(hexParagraph);
  metadataWrapper.appendChild(rgbParagraph);

  swatchWrapper.appendChild(colorWrapper);
  swatchWrapper.appendChild(metadataWrapper);

  return swatchWrapper;
}

constructSwatches(swatchData);
