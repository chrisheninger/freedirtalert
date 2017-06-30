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
  header: props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logo: props => ({
    width: '240px',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    cursor: 'default',
    userSelect: 'none',
  }),
  emoji: props => ({
    display: 'inline-block',
  }),
};
