import { Compute } from 'cerebral'
import semver from 'semver'

export default e =>
  Compute(e, frameworks =>
    frameworks.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA !== nameB) {
        return nameA < nameB ? -1 : 1
      }

      const versionA = a.version.toLowerCase()
      const versionB = b.version.toLowerCase()
      if (versionA !== versionB) {
        return semver.lt(versionA, versionB) ? -1 : 1
      }

      return 0
    })
  )
