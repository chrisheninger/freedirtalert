export default {
  root: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: '16px auto',
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
  }),
  switch: props => ({
    display: 'flex',
    padding: '2px',
    marginTop: '4px',
    marginLeft: '6px',
    fill: props.theme.colors.secondary,
  }),
  footer: props => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `1px solid ${props.theme.colors.gray300}`,
    padding: '24px',
    margin: '24px auto',
  }),
  heading: props => ({
    fontSize: '24px',
    fontWeight: '500',
    marginTop: '12px',
  }),
  about: props => ({
    maxWidth: '560px',
    marginTop: '24px',
  }),
};
