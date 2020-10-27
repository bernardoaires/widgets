import axios from 'axios'

export default axios.create({
  baseURL: 'http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
})