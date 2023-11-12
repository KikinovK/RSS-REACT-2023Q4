const formattedDate = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };

  return dateObject.toLocaleDateString('en-US', options);
};

export default formattedDate;
