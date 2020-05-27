import Papa from 'papaparse'
import gameData from './games.csv'
import 'alpinejs'

Papa.parse(gameData, {
  download: true,
  header: true,
  complete: ({ errors, data }) => {
    if (errors.length === 0) {
      window.games = data
    } else {
      // TODO: Handle Errors
    }
  },
})
