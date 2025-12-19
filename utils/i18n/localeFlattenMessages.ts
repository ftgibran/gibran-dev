// React intl doesn\'t support nested messages in translations
// ISSUE:https://stackoverflow.com/questions/45783677/react-intl-accessing-nested-messages
export function localeFlattenMessages(
  nestedMessages: Record<string, string | any>,
  prefix = '',
) {
  if (nestedMessages === null) {
    return {}
  }

  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, localeFlattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}
