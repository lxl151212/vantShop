import Moment from 'moment'
export function forMatTime(time) {
  return Moment(time).format('YYYY-MM-DD HH:mm:ss')
}
