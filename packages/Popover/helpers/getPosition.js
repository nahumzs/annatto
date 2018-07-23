const processAnchor = rect => ({
  topLeft: () => rect.left,
  top: () => rect.left + rect.width / 2,
  topRight: () => rect.left + rect.width,
  right: () => rect.left + rect.width + rect.height / 2,
  bottomRight: () => rect.left + rect.width + rect.height,
  bottom: () => ({ x: rect.left + rect.width / 2, y: rect.height }),
  bottomLeft: () => rect.left + rect.height,
  left: () => rect.left + rect.height / 2,
});

const processPosition = (rect, anchor, offset) => ({
  topLeft: () => {},
  top: () => {},
  topRight: () => {},
  right: () => {},
  bottomRight: () => {},
  bottom: () => {
    return {
      x: anchor.x - rect.width / 2,
      y: anchor.y + offset,
    };
  },
  bottomLeft: () => {},
  left: () => {},
});

export const getAnchor = (rect, alignment = "bottom") => processAnchor(rect)[alignment]();

export const getContentCoordinates = ({ rect, anchor, alignment = "bottom", offset = 8 }) =>
  processPosition(rect, anchor, offset)[alignment]();
