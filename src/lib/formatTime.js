export const formatTime = (dateString) => {
  const dateParts = dateString.split(/[-T:+]/);
  const hour = parseInt(dateParts[3]);
  const minute = parseInt(dateParts[4]);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHours = hour % 12 === 0 ? 12 : hour % 12;
  const formattedMinutes = minute < 10 ? '0' + minute : minute;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
