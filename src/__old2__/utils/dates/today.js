const today = () => {
  const now = Date.now();
  const opts = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('fr-FR', opts).format(now);
};

export default today;
