const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/run/media/engima/Hard Disk/Projects/OldWebsite/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/run/media/engima/Hard Disk/Projects/OldWebsite/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/run/media/engima/Hard Disk/Projects/OldWebsite/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/run/media/engima/Hard Disk/Projects/OldWebsite/src/pages/projects.js")))
}

