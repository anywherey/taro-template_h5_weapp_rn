import cloneDeep from 'lodash.clonedeep'

// 将filter中的all转户为空字符
export const formatFilter = <T>(filter): T => {
  const newFilter: T = cloneDeep(filter)
  for (const key in filter) {
    const value = filter[key]
    if (value === 'all') {
      newFilter[key] = ''
    }
  }
  return newFilter
}
