const processAnchors = rect => ({
  topLeft: () => rect.left,
  top: () => rect.left + rect.width / 2,
  topRight: () => rect.left + rect.width,
  right: () => rect.left + rect.width + rect.height / 2,
  bottomRight: () => rect.left + rect.width + rect.height,
  bottom: () => ({ x: rect.left + rect.width / 2, y: rect.height }),
  bottomLeft: () => rect.left + rect.height,
  left: () => rect.left + rect.height / 2,
});

export const getAnchors = (rect, alignment = "bottom") => processAnchors(rect)[alignment]();
