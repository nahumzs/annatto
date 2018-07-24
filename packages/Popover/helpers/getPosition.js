const processAnchor = rect => ({
  top: () => ({ x: rect.left + rect.width / 2, y: rect.top }),
  right: () => ({ x: rect.right, y: rect.y + rect.height / 2 }),
  bottom: () => ({ x: rect.left + rect.width / 2, y: rect.y + rect.height }),
  left: () => ({ x: rect.left, y: rect.y + rect.height / 2 }),
});

const rotate = {
  top: 180,
  right: 270,
  bottom: 0,
  left: 90,
};

const checkForViewportEdges = ({ rect, x, y, offset, rectTrigger, align }) => {
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

  // rotate might be a little more complicated because will depends
  // of the previous evaluations and where the tip should go

  return {
    x: newX,
    y: newY,
    rotateTip: rotate[align],
  };
};

const processPosition = ({ rect, anchor, offset, rectTrigger, align }) => ({
  top: () => {
    return checkForViewportEdges({
      rect,
      x: anchor.x - rect.width / 2,
      y: anchor.y - (rect.height + offset),
      offset,
      rectTrigger,
      align,
    });
  },
  right: () => {
    return checkForViewportEdges({
      rect,
      x: anchor.x + offset,
      y: anchor.y - rect.height / 2,
      offset,
      rectTrigger,
      align,
    });
  },
  bottom: () => checkForViewportEdges({ rect, x: anchor.x - rect.width / 2, y: anchor.y + offset, offset }),
  left: () => {
    return checkForViewportEdges({
      rect,
      x: anchor.x - rect.width - offset,
      y: anchor.y - rect.height / 2,
      offset,
      rectTrigger,
      align,
    });
  },
});

export const getAnchor = (rect, align = "bottom") => processAnchor(rect)[align]();

export const getCoordinates = ({ rect, anchor, align = "bottom", offset = 12, rectTrigger }) =>
  processPosition({ rect, anchor, offset, rectTrigger, align })[align]();
