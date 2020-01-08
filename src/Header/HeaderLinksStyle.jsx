const headerLinksStyle = (theme) => ({
  list: {
    fontSize: '14px',
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
  },
  listItem: {
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 32px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: theme.spacing(2),
        backgroundColor: theme.palette.text.primary,
      },
    },
  },
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: theme.spacing(2),
    fontSize: '14px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 32px)',
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
  socialIcons: {
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px',
  },
});

export default headerLinksStyle;
