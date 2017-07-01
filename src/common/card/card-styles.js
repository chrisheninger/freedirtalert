/* Base styles thanks to Google's https://material.io/guidelines/components/cards.html */
export default {
  root: props => ({
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    height: 'auto',
    background: props.theme.colors.white,
    boxShadow: props.theme.globalBoxShadow,
    borderRadius: props.theme.globalBorderRadius,
    overflow: 'hidden',
  }),
  image: props => ({
    display: 'block',
    width: '320px',
    height: '225px',
    backgroundColor: props.theme.colors.gray700,
    backgroundImage: `url('${props.image}')`,
    backgroundSize: 'cover',
  }),
  content: props => ({
    paddingTop: '24px',
    paddingRight: '16px',
    paddingBottom: '16px',
    paddingLeft: '16px',
  }),
  title: props => ({
    fontSize: '24px',
    fontWeight: '400',
    ...props.theme.ellipsis,
  }),
  location: props => ({
    fontSize: '16px',
    fontWeight: '400',
    ...props.theme.ellipsis,
  }),
  actions: props => ({
    paddingTop: '16px',
    paddingRight: '16px',
    paddingBottom: '24px',
    paddingLeft: '16px',
  }),
};
