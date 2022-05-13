export default function useGetDay() {
  const date = new Date();

  const dmy =
    date.getDate().toString().padStart(2, "0") +
    " · " +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    " · " +
    date.getFullYear().toString();
  // date.getFullYear().toString().slice(-2);

  const year = date.getFullYear().toString();

  return { dmy, year };
}
