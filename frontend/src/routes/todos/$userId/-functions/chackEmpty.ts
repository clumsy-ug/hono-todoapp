export const checkEmpty = (value: string): boolean => {
  if (!value.trim()) {
    alert('Todoが空欄です')
    return false
  }
  
  return true
}
