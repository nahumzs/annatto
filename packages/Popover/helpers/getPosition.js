const processAnchor = rect => ({
  top: () => ({ x: rect.left + rect.width / 2, y: rect.top }),
  right: () => ({ x: rect.right, y: rect.y + rect.height / 2 }),
  bottom: () => ({ x: rect.left + rect.width / 2, y: rect.y + rect.height }),
  left: () => ({ x: rect.left, y: rect.y + rect.height / 2 }),
});

const checkForViewportEdges = ({ rect, x, y, offset, rectTrigger }) => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  let newX = x;
  let newY = y;

  const offOnNegativeX = x < 0;
  const offOnPositiveX = x + rect.width > viewportWidth;

  const offOnNegativeY = y < 0;
  const offOnPositiveY = y + rect.height > viewportHeight;

  if (offOnNegativeX) newX = offset;
  if (offOnPositiveX) newX = viewportWidth - rect.width - offset;

  if (offOnPositiveY) newY = y - offset - (rect.height + rectTrigger.height);
  if (offOnNegativeY) newY = rect.height;

  return {
    x: newX,
    y: newY,
  };
};

const processPosition = ({ rect, anchor, offset, rectTrigger }) => ({
  top: () => {
    return checkForViewportEdges({
      rect,
      x: anchor.x - rect.width / 2,
      y: anchor.y - (rect.height + offset),
      offset,
      rectTrigger,
    });
  },
  right: () => {
    return checkForViewportEdges({
      rect,
      x: anchor.x + offset,
      y: anchor.y - rect.height / 2,
      offset,
      rectTrigger,
    });
  },
  bottom: () =>
    checkForViewportEdges({ rect, x: anchor.x - rect.width / 2, y: anchor.y + offset, offset, rectTrigger }),
  left: () => {
    return checkForViewportEdges({
      rect,
      x: anchor.x - rect.width - offset,
      y: anchor.y - rect.height / 2,
      offset,
      rectTrigger,
    });
  },
});

export const getAnchor = (rect, align = "bottom") => processAnchor(rect)[align]();

export const getContentCoordinates = ({ rect, anchor, align = "bottom", offset = 8, rectTrigger }) =>
  processPosition({ rect, anchor, offset, rectTrigger })[align]();
