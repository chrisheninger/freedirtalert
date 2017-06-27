export default {
  root: props => ({
    width: '100%',
    height: 'auto',
    background: '#fff',
    boxShadow: props.theme.globalBoxShadow,
    borderRadius: props.theme.globalBorderRadius,
  }),
  header: props => ({
    display: 'flex',
    alignItems: 'center',
    ...props.theme.globalPadding,
  }),
  title: props => ({
    fontSize: '28px',
    fontWeight: '700',
    lineHeight: '26px', // pulls the border-bottom up so typography descenders hang over, all cool-like
    marginRight: 'auto',
    borderBottom: `4px solid ${props.theme.colors.primary || '#ccc'}`,
  }),
  actions: props => ({
    display: 'flex',
    alignItems: 'center',
    flexShrink: '0',
    padding: '0 8px',
  }),
  body: props => ({
    ...props.theme.globalPadding,
    paddingTop: '0 !important',
  }),
};
