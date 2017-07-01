export default {
  scaffold: props => ({
    position: 'relative',
    display: 'flex',
  }),
  root: props => ({
    display: 'inline-flex',
    alignItems: 'center',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    opacity: props.disabled ? '0.65' : '1',

    // https://github.com/rofrischmann/fela/blob/master/docs/basics/Rules.md#6-other-selectors
    '& svg': {
      fill: props.checked
        ? props.theme.colors.primary
        : props.theme.colors.gray700,
    },

    ':focus': {
      outline: 'none',

      '& svg': {
        borderRadius: props.type === 'checkbox' ? '5px' : '100%',
        boxShadow:
          props.type === 'checkbox'
            ? `inset 0px 0px 0px 3px ${props.theme.colors.primaryLight}`
            : `inset 0px 0px 0px 2px ${props.theme.colors.primaryLight}`,
      },
    },
  }),
  toggle: props => ({
    position: 'relative',
    display: 'inline-block',
    width: '44px',
    height: '44px',
    borderRadius: '2px',
    padding: '10px',
    flexShrink: '0',
    overflow: 'hidden',

    // on-click expanding-circle animation shenanigans
    ':after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      top: '0',
      left: '0',
      pointerEvents: 'none',
      backgroundColor: props.theme.colors.primary,
      transform: props.checked ? 'scale(1, 1)' : 'scale(0, 0)',
      opacity: props.checked ? '0' : '0.4',
      transitionProperty: 'transform, opacity',
      transitionTimingFunction: 'ease-out',
      transitionDuration: props.checked ? '600ms' : '0s',
    },
  }),
  label: props => ({
    fontSize: '16px',
    fontWeight: '500',
    textTransform: 'capitalize', // force first letter to capitalize
    paddingRight: '12px', // extra hitbox padding
  }),
};
