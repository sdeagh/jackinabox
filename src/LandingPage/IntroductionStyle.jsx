const IntroductionStyle = (theme) => ({
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  title: {
    color: theme.palette.text.primary,
    margin: '1.75rem 0 0.875rem',
    textDecoration: 'none',
    fontWeight: '700',
    marginBottom: '1rem',
    minHeight: '32px',
    textAlign: 'center',
  },
  description: {
    color: theme.palette.text.primary,
  },
  main: {
    background: theme.palette.background.paper,
    position: 'relative',
    zIndex: '4',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: theme.spacing(1),
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    margin: '30px auto',
    height: '250px',
    width: '250px',
    background: 'green',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    padding: '30px 30px 30px 30px',
    borderRadius: '8px',
  },
});

export default IntroductionStyle;
