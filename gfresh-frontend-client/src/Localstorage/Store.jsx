const tokenstore = (value) => {
  if (typeof value === 'string') {
    localStorage.setItem('Oneuptoken', value);
  } else {
    localStorage.setItem('Oneuptoken', JSON.stringify(value));
  }
}

const gettoken = () => {
  try {
    const data = localStorage.getItem('Oneuptoken');
    // If the data is already a string (not a JSON string), return it directly
    if (data && (data.startsWith('eyJ') || data.includes('.'))) {
      return data;
    }
    // Otherwise, try to parse it
    return data ? JSON.parse(data) : null;
  } catch (e) {
    // If JSON parsing fails, it might be a plain string token
    return localStorage.getItem('Oneuptoken');
  }
}

const removeToken = () => {
  localStorage.removeItem('Oneuptoken')
}

const recentlystore = (value) => {
  localStorage.setItem('recently', JSON.stringify(value))
}

const getrecetly = () => {
  let data = localStorage.getItem('recently')
  return JSON.parse(data)
}

export { tokenstore, gettoken, removeToken, recentlystore, getrecetly }

