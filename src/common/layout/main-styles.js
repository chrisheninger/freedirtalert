export default {
  root: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: '0 auto',
  }),
  header: props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px',
  }),
  tagline: props => ({
    display: 'flex',
    alignItems: 'center',
  }),
  text: props => ({
    fontSize: '24px',
    fontWeight: '700',
  }),
  city: props => ({
    color: props.theme.colors.gray700,
    borderBottom: `3px solid ${props.theme.colors.secondary}`,
    // boxShadow: `inset 0 -1px 0 0 ${props.theme.colors
    //   .background}, inset 0 -4px 0 0 ${props.theme.colors.secondary}`,
  }),
  switch: props => ({
    display: 'flex',
    padding: '2px',
    marginTop: '4px',
    marginLeft: '6px',
    fill: props.theme.colors.secondary,
  }),
  footer: props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `1px solid ${props.theme.colors.gray300}`,
    marginTop: '24px',
    paddingTop: '24px',
  }),
  about: props => ({
    maxWidth: '560px',
    marginTop: '24px',
  }),
};
