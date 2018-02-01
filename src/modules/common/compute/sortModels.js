import { Compute } from 'cerebral'
import semver from 'semver'

export default e =>
  Compute(e, models =>
    models.sort((a, b) => {
      const frameworkA = a.framework.name.toLowerCase()
      const frameworkB = b.framework.name.toLowerCase()
      if (frameworkA !== frameworkB) {
        return frameworkA < frameworkB ? -1 : 1
      }

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
