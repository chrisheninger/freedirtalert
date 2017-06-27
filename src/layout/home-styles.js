export default {
  root: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    minHeight: '100vh',
  }),
  card: props => ({
    background: props.theme.colors.white,
    padding: '8px',
    margin: '8px auto',
    boxShadow: props.theme.globalBoxShadow,

    '> img': {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
  cardTitle: props => ({
    fontSize: '24px',
    fontWeight: '700',
    padding: '8px 0',
  }),
};
