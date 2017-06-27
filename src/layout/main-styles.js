export default {
  root: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: '0 auto',
    ...props.theme.globalPadding,
  }),
  logo: props => ({
    fontSize: '80px',
    textAlign: 'center',
    margin: '16px auto',
  }),
};
