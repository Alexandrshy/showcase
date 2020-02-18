export const formatDate = (startingDate: Date) => {
  const year = startingDate.getFullYear()
  const month = startingDate.getMonth() + 1
  const date = startingDate.getDate()

  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`
}
