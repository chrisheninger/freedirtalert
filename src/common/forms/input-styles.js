import caret from '../icon/icons/caret.svg';

export default {
  scaffold: props => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    opacity: props.disabled ? '0.65' : '1',
  }),
  label: props => ({
    display: 'block',
    width: '100%',
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'capitalize',
    paddingBottom: '4px',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
  }),
  root: props => ({
    display: 'block',
    width: '100%',
    height: '44px',
    color: 'inherit',
    fontFamily: 'inherit',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: props.disabled
      ? props.theme.colors.gray100
      : props.theme.colors.white,
    border: `2px solid ${props.theme.colors.gray700}`,
    borderRadius: '2px',
    padding: '10px 12px',
    cursor: props.disabled ? 'not-allowed' : 'inherit',
    appearance: 'none', // Reset default inputs for iOS/etc.

    ':focus': {
      outline: 'none', // Disable default focus glow
      borderColor: props.theme.colors.primary,
      boxShadow: `0px 0px 0px 3px ${props.theme.colors.primaryGlow}`,
    },
  }),
  input: () => ({}),
  textarea: props => ({
    minHeight: '120px',
    resize: 'vertical',
  }),
  select: props => ({
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${caret})`,
    backgroundSize: '24px 24px',
    backgroundPosition: 'right 8px center',
    padding: '10px 36px 10px 12px',

    '::-ms-expand': {
      display: 'none',
    },
  }),
  validation: props => ({}),
};
